import { InvoiceComponent } from './invoice/invoice.component';
import { ContractComponent } from './contract/contract.component';
import { AnnualComponent } from './annual/annual.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AnnualComponent
      },
      {
        path: 'contract',
        component: ContractComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalOverviewRoutingModule {}
