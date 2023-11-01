import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./views/landing.component').then((x) => x.LandingComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./views/login.component').then((x) => x.LoginComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
