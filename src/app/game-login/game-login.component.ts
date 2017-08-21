import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-login',
  template: `
    <div class="container">
      <h2 class="pl-3 mt-4 mb-4">Login</h2>
      <game-login-form formType="login"></game-login-form>
    </div>
  `,
  styles: [
    
  ]
})
export class GameLoginComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit() {
    
  }

}
