import { Injectable } from "@angular/core";
import { token } from "../interfaces/token.interface";

const KEY: string = 'authToken';

@Injectable({
    providedIn: 'root'
})

export class TokenService implements token{
    hasToken() {
        return !!this.getToken();
    }
    setToken(token: string) {
        window.localStorage.setItem(KEY, token);
    }
    getToken() {
        return window.localStorage.getItem(KEY);
    }
    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}