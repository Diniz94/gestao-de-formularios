import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { TableComponent } from "../shared/components/table/table.component";

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-dashboard'
            },
            {
                path: 'my-dashboard',
                component: TableComponent
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(dashboardRoutes) ],
    exports: [ RouterModule ]
})

export class DashboardRoutingModule{}