import { Component, OnInit, Input } from '@angular/core';
import { GameLoginService } from './game-login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'game-login-form',
  template: `
  <form #form="ngForm" novalidate (ngSubmit)="submit(form.valid)">
  <div class="col-6">
    <div *ngIf="loginError" class="from-group row alert alert-danger" role="alert">
      Wrong Credentials. Ensure that your email or password is correct.
    </div>
    <div *ngIf="registerError" class="from-group row alert alert-danger" role="alert">
      Error. User has not been created. Please try again.
    </div>
    <div *ngIf="registerSuccess" class="from-group row alert alert-success" role="alert">
       User has been created successfuly. You can login now.
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
    <div *ngSwitchCase="'login'">
      <button type="submit" class="btn btn-primary">Login</button>
      <button type="button" class="btn btn-secondary ml-2 mr-3" (click)="registerUser()">Register</button>
    </div>
    <div *ngSwitchCase="'register'">
      <button type="submit" class="btn btn-primary ml-2">Register</button>
      <button type="button" class="btn btn-secondary ml-2 mr-3" (click)="backToHome()">Back</button>
    </div> 
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

  loginError = false;
  registerError = false;
  user = {
    email: '',
    password: ''
  }

  constructor(
    private loginService: GameLoginService,
    private router: Router
  ) {
  }

  backToHome() {
    this.router.navigate(['login']);
  }

  registerUser() {
    this.router.navigate(['register']);
  }

  submit(formValid) {
    if (!formValid) {
      return;
    }

    if (this.formType === 'login') {
      this.loginService.login(this.user).subscribe(
        data => {
          this.router.navigate(['dashboard']);
        },
        error => {
          this.loginError = true;
        }
      );
    } else {
      this.loginService.register(this.user).subscribe(
        data => {
          this.backToHome();
        },
        error => {
          this.registerError = true;
        }
      );
    }
  }

  ngOnInit() {
    
  }
}
