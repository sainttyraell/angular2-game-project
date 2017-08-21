import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDashboardComponent } from './game-dashboard.component';
import { routerModule } from './game-dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [
    GameDashboardComponent
  ],
  exports: [
    GameDashboardComponent
  ]
})
export class GameDashboardModule { }
