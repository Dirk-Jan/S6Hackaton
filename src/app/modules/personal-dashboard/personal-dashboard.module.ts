import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalDashboardRoutingModule} from './personal-dashboard.routing';
import { PersonalDashboardComponent } from './pages/personal-dashboard/personal-dashboard.component';



@NgModule({
  declarations: [
    PersonalDashboardComponent
  ],
  imports: [
    CommonModule,
    PersonalDashboardRoutingModule,
    SharedModule
  ]
})
export class PersonalDashboardModule { }