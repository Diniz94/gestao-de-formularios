import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WizardNavigationComponent } from "./wizard-navigation.component";

@NgModule({
    declarations: [
        WizardNavigationComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        WizardNavigationComponent
    ],
    providers: []
})

export class WizardNavigationModule {}