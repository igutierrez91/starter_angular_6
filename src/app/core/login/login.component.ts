import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    user: any = {
        username: '',
        password: ''
    };
  constructor(private authentication: AuthenticationService, private router: Router) { }

    login() {
        this.authentication.login(this.user.username, this.user.password);
    }

}
