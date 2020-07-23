import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router) {
  }

  async canActivate() {
    if (this.getAuthToken() != null && this.getAuthToken().length !== 0) {
      return true;
    }
    this.router.navigate(['/poc/login']);
    return false;
  }

  getAuthToken(): string {
    const token: string = localStorage.getItem('POC_DASHBOARD_TOKEN_KEY');
    return (token != null ? token : '');
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders(Object.assign({}, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: this.getAuthToken()
    }));
  }
}
