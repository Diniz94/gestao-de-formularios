import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { UserService } from "src/app/core/services/user.service";
import { UserModel } from "src/app/core/models/user.model";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

    user$: Observable<UserModel>;
    user: UserModel;

    constructor(
        private userService: UserService,
        private router: Router){
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['login']);
    }
}