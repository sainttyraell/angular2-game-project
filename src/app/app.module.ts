import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { GameCharacterModule } from './game-character/game-character.module';
import { GameLoginModule } from './game-login/game-login.module';
import { GameDashboardModule } from './game-dashboard/game-dashboard.module';

import { routerModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GameCharacterModule,
    GameLoginModule,
    GameDashboardModule,
    FormsModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
