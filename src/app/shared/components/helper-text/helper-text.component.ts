import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-helper-text',
    templateUrl: './helper-text.component.html'
})

export class HelperTextComponent {

    @Input() text = '';
}