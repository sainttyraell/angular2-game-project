import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';

import { GameLoginService } from '../game-login/game-login.service';

export interface Character {
  name: String;
  race: String;
  class: String;
  gender: String;
  level: Number;
  experience: Number;
  image: String;
}

@Injectable()
export class GameCharacterService {

  server_url = 'https://59aaf4037f70eb00110191f5.mockapi.io/api/v1/characters';
  races = ['Human', 'Orc', 'Elf', 'Dark Elf'];
  classes = ['Warrior', 'Paladin', 'Mage', 'Rogue'];
  genders = ['Male', 'Female'];

  character = {};
  userId;

  private subject = new Subject();

  constructor(
    private http: Http,
    private loginService: GameLoginService
  ) { }

  createCharacter(): Character {
    return {
      name: '',
      race: '',
      class: '',
      gender: '',
      level: 1,
      experience: 0,
      image: 'http://placehold.it/200x200', // todo: dynamic images
    };
  }

  getRaces() {
    return this.races;
  }

  getClasses() {
    return this.classes;
  }

  getGenders() {
    return this.genders;
  }

  getCharacter() {
    let request;
    request = this.http.get(this.server_url);
    return request.map(response => {
      const res = response.json();
      this.getCurrentUserId();

      const character = res.find(item => {
        if (item.owner === this.userId) {
          return item;
        }
      });

      if (character) {
        return character;
      }

      return this.createCharacter();
    });
  }

  getCurrentUserId() {
    this.loginService.getLoggedUser().subscribe(user => {
      this.userId = user.id;
    });
  }

  saveCharacter(character) {
    character.owner = this.userId;
    return this.http.post(this.server_url, character);
  }
}
