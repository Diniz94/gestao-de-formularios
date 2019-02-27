import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class RegisterService {

    constructor(private apiService: ApiService){}

    checkEmailTaken(email: string){
        return this.apiService.get('/user/isAvailable/' + email);
    }

    registerUser(email: string, password: string, name: string, lastname: string){
        return this.apiService.post('/user/createUser',{
            email: email,
            password: password,
            name: name,
            lastname: lastname
        })
    }
}