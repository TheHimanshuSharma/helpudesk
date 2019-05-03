import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'aboutus', loadChildren: './pages/aboutus/aboutus.module#AboutusPageModule' },
  { path: 'contactus', loadChildren: './pages/contactus/contactus.module#ContactusPageModule' },
  // { path: 'accomodation', loadChildren: './pages/accomodation/accomodation.module#AccomodationPageModule' },
  // { path: 'bank', loadChildren: './pages/bank/bank.module#BankPageModule' },
  { path: 'cityregistration', loadChildren: './pages/cityregistration/cityregistration.module#CityregistrationPageModule' },
  { path: 'enrollment', loadChildren: './pages/enrollment/enrollment.module#EnrollmentPageModule' },
  // { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  // { path: 'codeofconduct', loadChildren: './pages/codeofconduct/codeofconduct.module#CodeofconductPageModule' },
  { path: 'wlanaccess', loadChildren: './pages/wlanaccess/wlanaccess.module#WlanaccessPageModule' },
  { path: 'studentcard', loadChildren: './pages/studentcard/studentcard.module#StudentcardPageModule' },
  { path: 'semesterticket', loadChildren: './pages/semesterticket/semesterticket.module#SemesterticketPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
