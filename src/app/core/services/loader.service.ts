import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private readonly _loadingCount = signal(0);
  
  // Expose computed signal for read-only access
  readonly isLoading = computed(() => this._loadingCount() > 0);

  show(): void {
    this._loadingCount.update(count => count + 1);
  }

  hide(): void {
    this._loadingCount.update(count => Math.max(0, count - 1));
  }

  clear(): void {
    this._loadingCount.set(0);
  }
}
