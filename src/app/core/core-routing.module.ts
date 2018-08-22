import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { HomeGuardService } from './services/home-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        canActivate: [HomeGuardService],
        component: LoginComponent
    },
    {
        path: 'admin',
        canActivate: [AuthGuardService],
        loadChildren: '../admin/admin.module#AdminModule'
    },
    {
        path: 'form',
        canActivate: [AuthGuardService],
        loadChildren: '../form/form.module#FormModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
