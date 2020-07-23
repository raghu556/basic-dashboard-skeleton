import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthenticationHttpInterceptor implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.removeRequests(request);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.removeRequests(request);
        return throwError(error);
      })
    );
  }

  private removeRequests(request: HttpRequest<any>) {
    const requestIndex = this.requests.indexOf(request);
    if (requestIndex >= 0) {
      this.requests.splice(requestIndex, 1);
    }

  }
}
