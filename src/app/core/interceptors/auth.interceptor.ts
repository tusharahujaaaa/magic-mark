import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request to set withCredentials: true so cookies are sent/received
  const credentialReq = req.clone({
    withCredentials: true
  });
  
  return next(credentialReq);
};
