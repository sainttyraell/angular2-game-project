import { Component, OnInit } from '@angular/core';
import { GameLoginService } from './game-login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'game-login',
  template: `
    <div class="container">
      <h2 class="pl-3 mt-4 mb-4">Login</h2>
      <form [formGroup]="form" novalidate (ngSubmit)="login(form.valid)">
        <div class="col-6">
          <div *ngIf="loginError" class="from-group row alert alert-danger" role="alert">
            Wrong Credentials. Ensure than your email or password is correct.
          </div>
          <div class="form-group row login-row">
            <label for="email" class="col-2 col-form-label">Email:</label>
            <div class="col-10">
              <input class="form-control" name="email" type="text" placeholder="Email adress" formControlName="email">
              <span
                *ngIf="form.controls['email'].hasError('required') && form.controls['email'].touched"
                class="text-danger"
              >
                Field can not be empty
              </span>
            </div>
          </div>
          <div class="form-group row login-row">
            <label for="email" class="col-2 col-form-label">Password:</label>
            <div class="col-10">
              <input class="form-control" name="password" type="password" placeholder="Your password" formControlName="password">
              <span
                *ngIf="form.controls['password'].hasError('required') && form.controls['password'].touched"
                class="text-danger"
              >
                Field can not be empty
              </span>
            </div>
          </div>
          <div class="form-group row justify-content-end">
            <button type="submit" class="btn btn-primary">Login</button>
            <button type="button" class="btn btn-secondary ml-2 mr-3">Register</button>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [
    '.login-row {min-height: 62px}'
  ]
})
export class GameLoginComponent implements OnInit {
  form: FormGroup;
  loginForm = {
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  };

  loginError = false;

  constructor(
    private loginService: GameLoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      'email': this.loginForm.email,
      'password': this.loginForm.password
    });
  }

  login(formValid) {
    if (!formValid) {
      return;
    }
    const user = {
      email: this.loginForm.email.value,
      password: this.loginForm.password.value
    };

    this.loginService.login(user).subscribe(
      data => {
        this.router.navigate(['dashboard']);
      },
      error => {
        this.loginError = true;
      }
    );
  }

  ngOnInit() {
    
  }

}
