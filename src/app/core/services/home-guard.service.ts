import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class HomeGuardService {

    constructor(private authentication: AuthenticationService, private router: Router) { }

    canActivate(): boolean | Promise<boolean> {
        const accessToken = this.authentication.getAccessToken();
        if (accessToken) {
            this.redirectToHomePage();
            return false;
        } else {
            return true;
        }
    }

    redirectToHomePage() {
        this.router.navigate(['admin', 'dashboard']);
    }

}
