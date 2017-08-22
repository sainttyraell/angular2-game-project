import { Component, OnInit, Input } from '@angular/core';
import { GameLoginService } from './game-login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'game-login-form',
  template: `
  <form #form="ngForm" novalidate (ngSubmit)="submit(form.valid)">
  <div class="col-6" *ngIf="!registered">
    <div *ngIf="loginError?.flag" class="from-group row alert alert-danger" role="alert">
      {{loginError.message}}
    </div>
    <div *ngIf="registerError?.flag" class="from-group row alert alert-danger" role="alert">
      {{registerError.message}}
    </div>
    <div class="form-group row login-row">
      <label for="email" class="col-2 col-form-label">Email:</label>
      <div class="col-10">
        <input class="form-control" #emailField="ngModel" [(ngModel)]="user.email" required name="email" type="email" placeholder="Email adress" email>
        <span
          *ngIf="emailField.errors?.required && form.submitted"
          class="text-danger"
        >
          Field can not be empty.
        </span>
        <span
        *ngIf="emailField.errors?.email && form.submitted"
        class="text-danger"
      >
        You have provided wrong email.
      </span>
      </div>
    </div>
    <div class="form-group row login-row">
      <label for="email" class="col-2 col-form-label">Password:</label>
      <div class="col-10">
        <input class="form-control" #passwordField="ngModel" required name="password" type="password" minlength="3" placeholder="Your password" [(ngModel)]="user.password">
        <span
        *ngIf="passwordField.errors?.required && form.submitted"
          class="text-danger"
        >
          Field can not be empty.
        </span>
        <span
        *ngIf="passwordField.errors?.minlength && form.submitted"
          class="text-danger"
        >
          Your password is too short.
        </span>
      </div>
    </div>
    <div class="form-group row justify-content-end" [ngSwitch]="formType">
    <button type="submit" class="btn btn-primary">{{formType}}</button>
    <div *ngSwitchCase="'login'">
      <button type="button" class="btn btn-secondary ml-2 mr-3" (click)="redirectTo('register')">Register</button>
    </div>
    <div *ngSwitchCase="'register'">
      <button type="button" class="btn btn-secondary ml-2 mr-3" (click)="redirectTo('login')">Back</button>
    </div>
    </div>
  </div>
  <div class="col-6" *ngIf="registered">
    <div class="from-group row alert alert-success" role="alert">
      User has been successfully created! You can&nbsp;<a routerLink="/login">log in now</a>
    </div>
  </div>
</form>
  `,
  styles: [
    '.login-row {min-height: 62px}'
  ]
})
export class GameLoginFormComponent implements OnInit {

  @Input()
  formType;

  loginError;
  registerError;
  registered;

  user = {
    email: '',
    password: ''
  }

  constructor(
    private loginService: GameLoginService,
    private router: Router
  ) {
  }

  redirectTo(url = '') {
    this.router.navigate([url]);
  }

  submit(formValid) {
    if (!formValid) {
      return;
    }

    if (this.formType === 'login') {
      this.loginService.login(this.user).subscribe(
        () => this.redirectTo('dashboard'),
        error =>  this.loginError = {flag: true, message: error.message}
      );
    } else {
      this.loginService.register(this.user).subscribe(
        () => this.registered = true,
        error => this.registerError = {flag: true, message: error.message}
      );
    }
  }

  ngOnInit() {
    
  }
}
