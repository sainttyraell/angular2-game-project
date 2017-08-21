import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-login-register',
  template: `
    <div class="container">
      <h2 class="pl-3 mt-4 mb-4">Register new user</h2>
      <game-login-form formType="register"></game-login-form>
    </div>
  `,
  styles: []
})
export class GameLoginRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
