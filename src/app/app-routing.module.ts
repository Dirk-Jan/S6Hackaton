import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
{
  path: '',
        component: ContentLayoutComponent,
        children: [
          {
            path: 'companydashboard',
            loadChildren: () => import('./modules/company-dashboard/company-dashboard.module')
              .then(module => module.CompanyDashboardModule)
          },
          {
            path: 'personaloverview',
            loadChildren: () => import('./modules/personal-overview/personal-overview.module')
                .then(m => m.PersonalOverviewModule)
          },
          {
            path: 'personaldashboard',
            loadChildren: () => import('./modules/personal-dashboard/personal-dashboard.module')
              .then(module => module.PersonalDashboardModule)
          },    
          {
        path: 'company',
        loadChildren: ()=>
          import('./modules/company-overview/company-overview.module').then(m => m.CompanyOverviewModule)
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
