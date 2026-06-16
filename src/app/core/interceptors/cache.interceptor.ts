import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpContextToken, HttpResponse } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import { of, tap } from 'rxjs';

export interface CacheConfig {
  cacheable: boolean;
  ttlMs?: number;
}

export const CACHE_RESPONSE = new HttpContextToken<CacheConfig>(() => ({
  cacheable: false
}));

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cacheService = inject(CacheService);
  const cacheConfig = req.context.get(CACHE_RESPONSE);

  // Only intercept GET requests that are explicitly configured as cacheable
  if (req.method !== 'GET' || !cacheConfig.cacheable) {
    return next(req);
  }

  const cacheKey = req.urlWithParams;
  const cachedResponse = cacheService.get<HttpResponse<any>>(cacheKey);

  if (cachedResponse) {
    // Return cached response as an observable of HttpResponse
    // Reconstructing it to ensure standard RxJS flow
    return of(
      new HttpResponse({
        body: cachedResponse.body,
        headers: cachedResponse.headers,
        status: cachedResponse.status,
        statusText: cachedResponse.statusText,
        url: cachedResponse.url || undefined
      })
    );
  }

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        // Store cloned response in cache
        cacheService.set(cacheKey, event.clone(), cacheConfig.ttlMs);
      }
    })
  );
};
