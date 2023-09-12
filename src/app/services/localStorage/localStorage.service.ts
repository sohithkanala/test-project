import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private tokenKey = 'userToken';

  setKey(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  getKey(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeKey(key: string): void {
    localStorage.removeItem(key);
  }

  isAuthenticated(): boolean {
    const token = this.getKey(this.tokenKey);
    return !!token;
  }
}
