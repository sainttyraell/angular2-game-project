import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GameCharacterComponent } from './game-character.component';
import { GameCharacterService } from './game-character.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    GameCharacterComponent
  ],
  exports: [
    GameCharacterComponent
  ],
  providers: [
    GameCharacterService
  ],
})
export class GameCharacterModule { }
