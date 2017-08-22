import { Component, OnInit } from '@angular/core';
import { GameCharacterService } from '../game-character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'game-character-create',
  templateUrl: './game-character-create.component.html',
  styleUrls: ['./game-character-create.component.css']
})
export class GameCharacterCreateComponent implements OnInit {
  character = {};
  races;
  classes;
  genders;

  constructor(
    private characterService: GameCharacterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.races = this.characterService.getRaces();
    this.classes = this.characterService.getClasses();
    this.genders = this.characterService.getGenders();
    this.characterService.getCharacter().subscribe(char => {
      this.character = char;
      console.log(this.character);
    });
  }

  submit(valid, character) {
    if (!valid) {
      return;
    }
    this.characterService.saveCharacter(character)
    .subscribe(() => {
      this.router.navigate(['character']);
    });
  }
}
