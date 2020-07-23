import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Inject, Injectable } from '@angular/core';

export interface AuthorizedRoute extends Route {
  permitAll?: boolean;
  children?: AuthorizedRoutes;
}
export declare type AuthorizedRoutes = AuthorizedRoute[];

@Injectable({
  providedIn: 'root'
})
export class ActivateIfUserAuthorized implements CanActivate {
  constructor(private readonly router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> | boolean {
    const currentRouteConfig: AuthorizedRoute = route && (route.routeConfig as AuthorizedRoute);

    if (currentRouteConfig) {
      if (currentRouteConfig.permitAll) {
        return true;
      }
    }

    return false;
  }
}
