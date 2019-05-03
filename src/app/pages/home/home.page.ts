import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public menuCtrl: MenuController) { }


  ionViewWillEnter(){
    this.menuCtrl.enable(true);
  }
  
  ngOnInit() {
  }

}
