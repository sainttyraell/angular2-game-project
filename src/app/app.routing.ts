import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full' }
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  //enableTracing: true,
  //useHash: true
});
