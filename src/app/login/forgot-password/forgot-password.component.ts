import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit{
    forgotForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
        ){}
        
    ngOnInit(): void {
        this.forgotForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ] 
            ]
        })
    }

    forgotPassword(){
        let email = this.forgotForm.get('email').value;
        this.authService
            .forgotPassword(email)
            .subscribe(
                () => {
                    console.log("Enviamos um e-mail para você")
                }, 
                (err) => {
                    console.log("erro" + err)
                }
            )
    }
}