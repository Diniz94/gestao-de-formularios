import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { LoginComponent } from "./login.component";

const LOGIN_ROUTES: Routes = [
    {
        path: 'reset-password',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'expires',
            },
            {
                path: 'expires',
                component: LoginComponent
            },
            {
                path: ':email',
                component: ResetPasswordComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(LOGIN_ROUTES)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}