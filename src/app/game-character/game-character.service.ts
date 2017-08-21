import { Injectable } from '@angular/core';

@Injectable()
export class GameCharacterService {

  constructor() { }

  character = {
    name: 'Fin',
    race: 'Dark Elf',
    class: 'Assassin',
    gender: 'Male',
    apperiance: {
      skinColor: 'grey',
      hair: 'white',
      height: '180cm',
      physique: 'Athletic'
    },
    level: 1,
    experiance: 0,
    image: 'http://placehold.it/200x200',
  };

  getCharacter() {
    return this.character;
  }

  saveCharacter(character) {
    const newCharacter = character;
    this.character = Object.assign({}, newCharacter);
    
    return this.character;
  }
}
