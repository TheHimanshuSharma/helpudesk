import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  //Set default value of isMenuOpen to false
public isMenuOpen : boolean = false;

constructor() {}

//This function toggles the expandable item to open or close
public toggleAccordion() : void{
    this.isMenuOpen = !this.isMenuOpen;
}
  
  ngOnInit() {
  }

}
