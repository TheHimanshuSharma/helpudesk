import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interface/pages'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;
  //  Menu Items and their url

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.appPages=[
      {
        title: 'Home',
        url: '/home',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Profile',
        url: '/profile',
        direct: 'forward',
        icon: 'person'
      },
      {
        title: 'Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'settings'
      },
      {
        title: 'About Us',
        url: '/aboutus',
        direct: 'forward',
        icon: 'book'
      },
      {
        title: 'Contact Us',
        url: '/contactus',
        direct: 'forward',
        icon: 'mail'
      },
      {
        title: 'Logout',
        url: '/login',
        direct: 'backward',
        icon: 'log-out'
      },
      {
        title: 'Tabs',
        url: '/tabs',
        direct: 'forward',
        icon: 'log-out'
      }    
     ];
    
    this.initializeApp();
  }

  goToProfile(){
    this.router.navigateByUrl('/profile');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}