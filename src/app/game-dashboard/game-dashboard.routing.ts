import { RouterModule, Routes } from '@angular/router';
import { GameDashboardComponent } from './game-dashboard.component';

const routesConfig: Routes = [
    {path: 'dashboard', component: GameDashboardComponent}
  ];
  
export const routerModule = RouterModule.forChild(routesConfig);
