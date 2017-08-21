import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '**', redirectTo: '/login', pathMatch: 'full' },
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  //enableTracing: true,
  //useHash: true
});
