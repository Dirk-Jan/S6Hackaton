import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NavComponent } from './layouts/nav/nav.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,

    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
