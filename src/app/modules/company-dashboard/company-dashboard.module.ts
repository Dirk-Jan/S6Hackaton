import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { CompanyDashboardRouting } from './company-dashboard.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { BalanceComponent } from './pages/company-dashboard/balance/balance.component';
import { ConsumptionComponent } from './pages/company-dashboard/consumption/consumption.component';
import { ProductionComponent } from './pages/company-dashboard/production/production.component';



@NgModule({
  declarations: [
    CompanyDashboardComponent,
    BalanceComponent,
    ConsumptionComponent,
    ProductionComponent
  ],
  imports: [
    CommonModule,
    CompanyDashboardRouting,
    SharedModule
  ]
})
export class CompanyDashboardModule { }
