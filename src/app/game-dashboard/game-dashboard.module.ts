import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDashboardComponent } from './game-dashboard.component';
import { routerModule } from './game-dashboard.routing';
import { GameDashboardNavigationComponent } from './game-dashboard-navigation/game-dashboard-navigation.component';
import { GameDashboardMainComponent } from './game-dashboard-main.component';

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [
    GameDashboardComponent,
    GameDashboardNavigationComponent,
    GameDashboardMainComponent
  ],
  exports: [
    GameDashboardComponent
  ]
})
export class GameDashboardModule { }
