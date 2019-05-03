import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CodeofconductPage } from './codeofconduct.page';

const routes: Routes = [
  {
    path: '',
    component: CodeofconductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CodeofconductPage]
})
export class CodeofconductPageModule {}
