import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    templateUrl: './form-data.component.html',
    styleUrls: ['./form-data.component.scss']
})

export class FormDataComponent implements OnInit{

    dataForm: FormGroup;

    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.dataForm = this.formBuilder.group({
            name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(20)
                ]
            ],
            author: ['Rafael Marinho'],
            description: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(140)
                ]
            ]
        })
    }
}