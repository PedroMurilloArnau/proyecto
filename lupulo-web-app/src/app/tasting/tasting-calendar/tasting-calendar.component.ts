import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasting-calendar',
  templateUrl: './tasting-calendar.component.html',
  styleUrls: ['./tasting-calendar.component.css']
})
export class TastingCalendarComponent implements OnInit {
  selected: Date | null;
  minDate: Date;
  maxDate: Date;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 2;
  };

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
   }

  ngOnInit(): void {
  }

}
