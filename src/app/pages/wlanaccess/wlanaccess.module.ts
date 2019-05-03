import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WlanaccessPage } from './wlanaccess.page';

const routes: Routes = [
  {
    path: '',
    component: WlanaccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WlanaccessPage]
})
export class WlanaccessPageModule {}
