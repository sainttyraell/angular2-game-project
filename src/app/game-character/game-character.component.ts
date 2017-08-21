import { Component, OnInit } from '@angular/core';
import { GameCharacterService } from './game-character.service';

@Component({
  selector: 'game-character',
  templateUrl: './game-character.component.html',
  styleUrls: ['./game-character.component.css']
})
export class GameCharacterComponent implements OnInit {
  character = {};
  edited = false;
  availableRaces = ['Human', 'Orc', 'Elf', 'Dark Elf'];

  constructor(private gameCharacterService: GameCharacterService) {

  }

  edit() {
    this.edited = true;
  }

  ngOnInit() {
    this.character = this.gameCharacterService.getCharacter();
  }

  save(character) {
    this.character = this.gameCharacterService.saveCharacter(character);
    this.edited = false;
  }

}
