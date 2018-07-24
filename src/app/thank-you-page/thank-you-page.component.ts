import { Component, OnInit } from '@angular/core';
import arrUser from '../arrayUser';
@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name=arrUser[0];
}
