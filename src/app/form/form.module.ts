import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./form.component";
import { WizardNavigationModule } from "../shared/layout/wizard-navigation/wizard-navigation.module";
import { FormRoutingModule } from "./form.routing.module";
import { FormDataComponent } from "./form-wizard/form-data/form-data.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HelperTextModule } from "../shared/components/helper-text/helper-text.module";
import { FormTypeComponent } from "./form-wizard/form-type/form-type.component";

@NgModule({
    declarations: [
        FormComponent,
        FormDataComponent,
        FormTypeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        WizardNavigationModule,
        FormRoutingModule,
        HelperTextModule
    ],
    exports: [],
    providers: []
})

export class FormModule {}