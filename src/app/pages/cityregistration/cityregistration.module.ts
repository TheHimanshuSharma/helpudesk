import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CityregistrationPage } from './cityregistration.page';

const routes: Routes = [
  {
    path: '',
    component: CityregistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CityregistrationPage]
})
export class CityregistrationPageModule {}
