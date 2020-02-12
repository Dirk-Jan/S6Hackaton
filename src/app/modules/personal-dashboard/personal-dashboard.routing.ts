import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDashboardComponent } from './pages/personal-dashboard/personal-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PersonalDashboardComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonalDashboardRoutingModule { }
