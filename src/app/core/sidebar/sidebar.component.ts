import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs/internal/Observable';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class HeaderComponent implements OnInit {
    items: MenuItem[];
    isLoggedIn: Observable<boolean>;
    constructor(private _authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.items = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-plus'},
            {label: 'Logout', icon: 'pi pi-fw pi-download', command: (event) => this.logout()}
        ];
        this.isLoggedIn = this._authenticationService.isLoggedIn();
    }

    logout() {
        this._authenticationService.logout();
    }

}
