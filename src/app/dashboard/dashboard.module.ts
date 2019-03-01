import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./dashboard.component";
import { TableComponent } from "../shared/components/table/table.component";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { NavbarModule } from "../shared/layout/navbar/navbar.module";

@NgModule({
    declarations: [
        DashboardComponent,
        TableComponent        
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NavbarModule
    ],
    exports: [],
    providers: []
})

export class DashboardModule {}