import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameLoginComponent } from './game-login.component';
import { GameLoginRegisterComponent } from './game-login-register.component';
import { GameLoginService } from './game-login.service';
import { routerModule } from './game-login.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routerModule
  ],
  declarations: [
    GameLoginComponent,
    GameLoginRegisterComponent
  ],
  exports: [
    GameLoginComponent,
    GameLoginRegisterComponent
  ],
  providers: [
    GameLoginService
  ]
})
export class GameLoginModule { }
