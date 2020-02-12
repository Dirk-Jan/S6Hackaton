import { SharedModule } from './../../shared/shared.module';
import { PersonalOverviewRoutingModule } from './personal-overview.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnualComponent } from './annual/annual.component';



@NgModule({
  declarations: [
    AnnualComponent
  ],
  imports: [
    CommonModule,
    PersonalOverviewRoutingModule,
    SharedModule
  ]
})
export class PersonalOverviewModule { }
