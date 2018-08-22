import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthenticationService {
    token = {
        refresh_token: 'refreshtokencode',
        exp: new Date((new Date().getDate() + 1)),
        access_token: {
            username: 'user',
            roles: ['Admin', 'RegisteredUser', 'Super User']
        }
    };

    tokenKey: string = 'a6smm_utoken';
    isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.getToken());

    constructor(private router: Router) { }

    login(username, password) {
        this.setToken(this.token);
        localStorage.setItem('token', 'JWT');
        this.isLoginSubject.next(true);
        this.router.navigate(['admin', 'dashboard']);
    }

    logout() {
        this.removeToken();
        localStorage.removeItem('token');
        this.isLoginSubject.next(false);
        this.router.navigate(['login']);
    }

    setToken(token) {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
    }

    getAccessToken() {
        return JSON.parse(localStorage.getItem(this.tokenKey));
    }

    refreshToken() {
        this.token.exp = new Date((new Date().getDate() + 1));
        this.setToken(this.token);
    }

    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }

    private getToken(): boolean {
        return !!localStorage.getItem('token');
    }

    isLoggedIn(): Observable <boolean> {
        return this.isLoginSubject.asObservable();
    }

}
