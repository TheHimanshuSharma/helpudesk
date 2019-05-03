import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SemesterticketPage } from './semesterticket.page';

const routes: Routes = [
  {
    path: '',
    component: SemesterticketPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SemesterticketPage]
})
export class SemesterticketPageModule {}
