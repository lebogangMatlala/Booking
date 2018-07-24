import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';
import { router } from './app.router';
import { SuccessComponent } from './success/success.component';
import { PackageComponent } from './package/package.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    HomeComponent,
    SuccessComponent,
    PackageComponent,
    ContactComponent,
    ThankYouPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
