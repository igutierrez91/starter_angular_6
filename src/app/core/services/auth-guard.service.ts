import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

    constructor(private authentication: AuthenticationService, private router: Router) { }

    canActivate(): boolean | Promise<boolean> {
        const accessToken = this.authentication.getAccessToken();
        if (!accessToken) {
            this.redirectToLoginPage();
            return false;
        } else {
            return true;
        }
    }

    redirectToLoginPage() {
        this.router.navigate(['/login']);
    }

}
