import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

import { RegisterService } from "./register.service";

@Injectable({
    providedIn: 'root'
})

export class EmailValidatorService {
    
    constructor(private registerService: RegisterService){}

    emailIsAvailable() {
         return (control: AbstractControl) => {
             return control
                    .valueChanges
                    .pipe(debounceTime(300))
                    .pipe(switchMap(email => this.registerService.checkEmailTaken(email)
            ))
            .pipe(map(isTaken => isTaken ? {emailTaken: true} : null))
            .pipe(first());
         }
    }
}