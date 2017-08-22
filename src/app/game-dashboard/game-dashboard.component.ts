import { Component, OnInit } from '@angular/core';
import { GameLoginService } from '../game-login/game-login.service';

@Component({
  selector: 'game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent implements OnInit {
  user;
  constructor(private loginService: GameLoginService) { }

  ngOnInit() {
    this.user = this.loginService.getLoggedUser();
  }

  logout() {
    this.loginService.logout();
  }

}
