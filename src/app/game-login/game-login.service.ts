import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class GameLoginService {
  token;
  user;

  constructor(
    private http: Http,
    private baseOptions: RequestOptions,
    private router: Router
  ) {}

  login(user) {
    const url = 'http://localhost:3000/v1/auth/login';
    const body = {
        email: user.email,
        password: user.password
    };

    return this.http.post(url, body).map((response: Response) => {
      const data = response.json();
      if (data && data.token) {
          this.token = data.token.accessToken;
          this.user = data.user;
          localStorage.setItem('userToken', this.token);
          localStorage.setItem('gameUser', JSON.stringify(this.user));
          this.router.navigate(['dashboard']); // temp solution
      }

      return data;
    })
    .catch(res => {
      return Observable.throw(res.json());
    });
  }

  register(user) {
    const url = 'http://localhost:3000/v1/auth/register';
    const body = {
        email: user.email,
        password: user.password
    };

    return this.http.post(url, body).map((response: Response) => {
      const data = response.json();
      
      return data;
    })
    .catch(res => {
      return Observable.throw(res.json());
    });
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['login']);
  }

  getLoggedUser() {
    if  (!this.user) {
      this.user = JSON.parse(localStorage.getItem('gameUser')); // temp solution
    }

    if (!this.user) {
      this.router.navigate(['login']);
    }

    return this.user;
  }

  getToken() {
    const token = localStorage.getItem('token');

    if (!token) {
        return false;
    }

    this.baseOptions.headers.set('Authorization', 'Bearer ' + token);

    return token;
  }
}
