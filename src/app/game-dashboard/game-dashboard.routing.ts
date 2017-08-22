import { RouterModule, Routes } from '@angular/router';
import { GameDashboardComponent } from './game-dashboard.component';
import { GameCharacterComponent } from '../game-character/game-character.component';
import { GameCharacterCreateComponent } from '../game-character/game-character-create/game-character-create.component';
import { GameDashboardMainComponent } from './game-dashboard-main.component';

const routesConfig: Routes = [
    {
      path: '',
      component: GameDashboardComponent,
      children: [
        {
          path: 'dashboard',
          component: GameDashboardMainComponent
        },
        {
          path: 'character',
          component: GameCharacterComponent
        },
        {
          path: 'character/create',
          component: GameCharacterCreateComponent
        }
      ]
    }
  ];

export const routerModule = RouterModule.forChild(routesConfig);
