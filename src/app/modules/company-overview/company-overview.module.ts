import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompanyOverviewRoutingModule } from './company-overview-routing.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    CompanyOverviewRoutingModule
  ]
})
export class CompanyOverviewModule { }
