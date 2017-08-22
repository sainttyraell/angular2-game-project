import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GameCharacterComponent } from './game-character.component';
import { GameCharacterService } from './game-character.service';
import { GameCharacterCreateComponent } from './game-character-create.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    GameCharacterComponent,
    GameCharacterCreateComponent
  ],
  exports: [
    GameCharacterComponent
  ],
  providers: [
    GameCharacterService
  ],
})
export class GameCharacterModule { }
