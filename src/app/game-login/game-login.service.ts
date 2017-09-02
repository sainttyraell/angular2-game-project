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
    const url = 'https://59aaf4037f70eb00110191f5.mockapi.io/api/v1/users';

    return this.http.get(url).map((response: Response) => {
      const data = response.json();
      if (data) {
          this.user = data.find((item) => {
            return item.email === user.email;
          });

          if (!this.user) {
            this.router.navigate(['login']);
          }

          this.token = this.user.token;
          localStorage.setItem('userToken', this.token);
          this.router.navigate(['dashboard']); // temp solution
      }

      return data;
    })
    .catch(res => {
      return Observable.throw(res.json());
    });
  }

  register(user) {
    const url = 'https://59aaf4037f70eb00110191f5.mockapi.io/api/v1/users';
    const body = {
        email: user.email,
        password: user.password,
        token: '3fasdfq2fasdfgh23'
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
    const url = 'https://59aaf4037f70eb00110191f5.mockapi.io/api/v1/users';
    const token = this.getToken();

      return this.http.get(url).map((response: Response) => {
        const data = response.json();
        if (data && token) {
            return data.find((item) => {
              return item.token === token;
            });
        }

        return data;
      })
      .catch(res => {
        return Observable.throw(res.json());
      });
  }

  getToken() {
    const token = localStorage.getItem('userToken');

    if (!token) {
        return false;
    }

    return token;
  }
}
