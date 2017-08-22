import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-dashboard-main',
  template: `
    <div class="container">
      <h4>Welcome in Tha Game</h4>
      <p>Its default view</p>
    </div>
  `,
  styles: []
})
export class GameDashboardMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
