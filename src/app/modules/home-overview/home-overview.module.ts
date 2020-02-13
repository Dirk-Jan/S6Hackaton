import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './pages/main/main.component';
import { HomeOverviewRouting } from './home-overview.routing';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeOverviewRouting,
    SharedModule
  ]
})
export class HomeOverviewModule { }
