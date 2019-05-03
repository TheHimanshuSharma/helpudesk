import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordionlist',
  templateUrl: './accordionlist.component.html',
  styleUrls: ['./accordionlist.component.scss'],
})
export class AccordionlistComponent implements OnInit {

//Set default value of isMenuOpen to false
public isMenuOpen : boolean = false;

constructor() {}

//This function toggles the expandable item to open or close
public toggleAccordion() : void{
    this.isMenuOpen = !this.isMenuOpen;
}

  ngOnInit() {}

}
