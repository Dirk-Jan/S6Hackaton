import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NavComponent } from './layouts/nav/nav.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentLayoutComponent,
    SideNavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
