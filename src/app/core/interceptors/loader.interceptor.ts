import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpContextToken } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs/operators';

export const BYPASS_LOADER = new HttpContextToken<boolean>(() => false);

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);

  if (req.context.get(BYPASS_LOADER)) {
    return next(req);
  }

  loaderService.show();
  return next(req).pipe(
    finalize(() => loaderService.hide())
  );
};
