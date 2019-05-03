import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionlistComponent } from './accordionlist/accordionlist.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AccordionlistComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AccordionlistComponent]
})
export class SharedlistModule { }
