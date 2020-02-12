import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { CompanyDashboardRoutingModule } from './company-dashboard.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CompanyDashboardComponent],
  imports: [
    CommonModule,
    CompanyDashboardRoutingModule,
    SharedModule
  ]
})
export class CompanyDashboardModule { }
