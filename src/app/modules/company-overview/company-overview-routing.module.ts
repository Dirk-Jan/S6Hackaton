import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';

const coRoutes: Routes = [
  { path: 'overview', component: OverviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(coRoutes)],
  exports: [RouterModule]
})
export class CompanyOverviewRoutingModule { }
