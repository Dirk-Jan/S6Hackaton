import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
{
  path: '',
        component: ContentLayoutComponent,
        children: [
          {
            path: 'personaloverview',
            loadChildren: () =>
              import('./modules/personal-overview/personal-overview.module').then(m => m.PersonalOverviewModule)
          },
          {
            path: 'personaldashboard',
            loadChildren: () => import('./modules/personal-dashboard/personal-dashboard.module')
            .then(module => module.PersonalDashboardModule)
          }
        ]
},

  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }
