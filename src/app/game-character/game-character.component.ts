import { Component, OnInit } from '@angular/core';
import { GameCharacterService, Character } from './game-character.service';

@Component({
  selector: 'game-character',
  templateUrl: './game-character.component.html',
  styleUrls: ['./game-character.component.css']
})
export class GameCharacterComponent implements OnInit {
  character = {};

  constructor(
    private characterService: GameCharacterService
  ) {}

  ngOnInit() {
    this.characterService.getCharacter().subscribe((char: Character) => {
      this.character = char;
    });

    console.log('initialized');
  }
}
