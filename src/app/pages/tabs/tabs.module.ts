import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

// Navigation within the Tabs
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,

    // Code for Tabs Navigation Path/Routes
    children: [
      {
        path: 'accomodation',
        loadChildren: '../accomodation/accomodation.module#AccomodationPageModule'
      },
      {
        path: 'bank',
        loadChildren: '../bank/bank.module#BankPageModule'
      },
      {
        path: 'faq',
        loadChildren: '../faq/faq.module#FaqPageModule'
      },
      {
        path: 'codeofconduct',
        loadChildren: '../codeofconduct/codeofconduct.module#CodeofconductPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/accomodation',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
