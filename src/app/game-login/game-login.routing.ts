import { RouterModule, Routes } from '@angular/router';
import { GameLoginComponent } from './game-login.component';
import { GameLoginRegisterComponent } from './game-login-register.component';

const routesConfig: Routes = [
    {path: 'login', component: GameLoginComponent},
    {path: 'register', component: GameLoginRegisterComponent}
  ];

export const routerModule = RouterModule.forChild(routesConfig);
