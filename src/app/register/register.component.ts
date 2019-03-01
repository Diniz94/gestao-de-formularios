import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailValidatorService } from "../core/services/email.validator.service";
import { RegisterService } from "../core/services/register.service";

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
    
    registerForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private emailValidatorService: EmailValidatorService,
        private registerService: RegisterService){}
    
    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(18)
                ]
            ],
            lastname: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]   
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ],
                this.emailValidatorService.emailIsAvailable() 
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(16)
                ] 
            ],
            passwordConfirm: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(16)
                ] 
            ]
        })
    }

    register(){
        let email = this.registerForm.get('email').value;
        let password = this.registerForm.get('password').value;
        let name = this.registerForm.get('name').value;
        let lastname = this.registerForm.get('name').value;

        this.registerService
            .registerUser(email, password, name, lastname)
            .subscribe(
                () => {
                    console.log('Usuario registrado com sucesso'),
                    this.registerForm.reset();
                },(err) => {
                    console.log('Falha ao registrar o usuario');
                }
            )
    }

}