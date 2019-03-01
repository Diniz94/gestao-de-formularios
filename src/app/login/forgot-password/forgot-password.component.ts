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
        private authService: AuthService,
        private formBuilder: FormBuilder
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
                    console.log('E-mail enviado com sucesso')
                },
                (err) => {
                    console.log('Erro ao enviar o e-mail de recuperação de senha')
                }
            )
    }
}