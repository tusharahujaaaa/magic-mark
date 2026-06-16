import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Keep track of logged-in status. In production, this can also check cookie presence or a token.
  private readonly _isAuthenticated = signal<boolean>(
    typeof window !== 'undefined' ? localStorage.getItem('is_logged_in') === 'true' : false
  );

  readonly isAuthenticated = this._isAuthenticated.asReadonly();

  login(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('is_logged_in', 'true');
    }
    this._isAuthenticated.set(true);
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('is_logged_in');
    }
    this._isAuthenticated.set(false);
  }
}
