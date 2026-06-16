import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error Intercepted:', error);

      if (error.status === 401) {
        // Unauthorized - session expired or user not logged in
        console.warn('Session expired or unauthorized. Redirecting to login.');
        router.navigate(['/login']);
      } else if (error.status === 403) {
        console.warn('Access denied (403 Forbidden).');
      }

      return throwError(() => error);
    })
  );
};
