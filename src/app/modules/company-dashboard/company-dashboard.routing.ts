import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CompanyDashboardComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyDashboardRouting { }
