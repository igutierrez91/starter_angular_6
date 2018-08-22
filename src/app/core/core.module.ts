import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { HomeGuardService } from './services/home-guard.service';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule,
        MenuModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        SidebarModule
    ],
    declarations: [LoginComponent, HeaderComponent, NotFoundComponent],
    exports: [
        RouterModule,
        HeaderComponent
    ],
    providers: [
        AuthenticationService,
        AuthGuardService,
        HomeGuardService
    ]
})
export class CoreModule { }
