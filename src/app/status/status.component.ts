import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit{

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    const date1 = new Date('December 17, 1995 03:24:00');
  }

  cookie = navigator.cookieEnabled;
  language = navigator.languages;
  vendor = navigator.vendor;
  maxTouch = navigator.maxTouchPoints;
  userAgent = navigator.userAgent;
  processor = navigator.hardwareConcurrency;
  timeStamp = Date();
  }
