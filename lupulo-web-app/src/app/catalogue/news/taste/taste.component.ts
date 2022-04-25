import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-taste',
  templateUrl: './taste.component.html',
  styleUrls: ['./taste.component.css']
})
export class TasteComponent implements OnInit {
  taste: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {namer: string},private authService: UserService,) {}

  ngOnInit(): void {
    console.log(this.data.namer)

    this.taste = this.authService.getTaster(this.data.namer)
    .subscribe((res: any) => {
      this.taste = res;
    });
  }

}
