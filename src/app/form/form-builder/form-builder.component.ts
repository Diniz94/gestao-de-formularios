import { Component, OnInit } from "@angular/core";
declare var $: any;

const formData = [
    {
        type: 'header',
        subType: 'h1',
        label: 'Builder your Form'
    },
    {
        type: "paragraph",
        subtype: "p",
        label: "This is a demonstration of formBuilder running in an AngularJS project."
    }
]

@Component({
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent implements OnInit {
    ngOnInit(): void {
        $(document.getElementById('fb-editor')).formBuilder({ formData });
    }
}