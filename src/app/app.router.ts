import { ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BookingsComponent} from './bookings/bookings.component';
import {SuccessComponent} from './success/success.component';
import { PackageComponent } from './package/package.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { AboutComponent } from './about/about.component';

export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bookings', component: BookingsComponent},
    { path: 'success', component: SuccessComponent},
    { path: 'package', component: PackageComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'thank-you-page', component: ThankYouPageComponent},
    { path: 'about', component: AboutComponent},
];

