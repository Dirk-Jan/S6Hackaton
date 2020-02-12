import { SharedModule } from './../../shared/shared.module';
import { PersonalOverviewRoutingModule } from './personal-overview.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnualComponent } from './annual/annual.component';
import { ContractComponent } from './contract/contract.component';
import { InvoiceComponent } from './invoice/invoice.component';



@NgModule({
  declarations: [
    AnnualComponent,
    ContractComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    PersonalOverviewRoutingModule,
    SharedModule
  ]
})
export class PersonalOverviewModule { }
