import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';

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

  server_url = 'http://localhost:3001/characters';
  races = ['Human', 'Orc', 'Elf', 'Dark Elf'];
  classes = ['Warrior', 'Paladin', 'Mage', 'Rogue'];
  genders = ['Male', 'Female'];

  character = {};
  private subject = new Subject();

  constructor(
    private http: Http
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
      const userId = this.getCurrentUserId();
      
      const character = res.find(item => {
        if (item.owner === userId) {
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
    const user = JSON.parse(localStorage.getItem('gameUser'));
    return user.id;
  }

  saveCharacter(character) {
    let request;
    
    character.owner = this.getCurrentUserId();
    request = this.http.post(this.server_url, character);
    
    return request.map(response => response.json());
  }
}
