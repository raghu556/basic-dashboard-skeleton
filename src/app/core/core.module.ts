import { NgModule } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { routes } from './routes';
import { AuthenticationHttpInterceptor } from 'src/app/shared/authentication/auth-http-interceptor.service';
import { addAuthorizationGuards } from 'src/app/shared/authorization/add-authorization-guards';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationHttpInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(router: Router) {
    router.resetConfig(addAuthorizationGuards(routes));
  }
}
