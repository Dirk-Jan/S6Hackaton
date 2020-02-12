import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompanyOverviewRouting } from './company-overview.routing';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    CompanyOverviewRouting
  ]
})
export class CompanyOverviewModule { }
