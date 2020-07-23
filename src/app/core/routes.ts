import { LoginComponent } from 'src/app/login/login.component';
import { AuthorizedRoutes } from 'src/app/shared/authorization/activate-if-user-authorized';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/shared/authentication/auth.guard';
const homePath = '/poc/dashboard';
export const routes: AuthorizedRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/poc/login'
  },
  {
    path: 'poc',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        permitAll: true
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        permitAll: true,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: homePath
          }
        ]
      }
      // {
      //   path: 'access-denied',
      //   component: '',  // Access Denied Component
      //   permitAll: true
      // }
    ]
  },
  // {
  //   path: '**',
  //   component: '', // Page Not Found Component
  //   permitAll: true
  // }
];
