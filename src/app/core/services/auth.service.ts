import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { tap } from "rxjs/operators";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(
        private api: ApiService,
        private userService: UserService){}

    login(email: string, password: string){
        return this.api.post('/user/authUser', {email: email, password: password})
        .pipe(tap(res => {
            const authToken = res.body['token'];
            this.userService.setToken(authToken);
        }))
    }

    forgotPassword(email: string){
        return this.api.post('/user/forgotPassword', {
            email: email
        })
    }

    resetPassword(email: string, token: string, password: string){
        return this.api.post('/user/resetPassword', {
            email: email,
            password: password,
            token: token
        })
    }
}