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

  constructor(private characterService: GameCharacterService) {

  }

  edit() {
    this.edited = true;
  }

  ngOnInit() {
    this.characterService.getCharacter().subscribe(
      char => {
        this.character = char;
      }
    );
  }

  save(character) {
    this.character = this.characterService.saveCharacter(character);
    this.edited = false;
  }

}
