import { Component,Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
    selector:'app-stop-tasting',
    template: `<h1 mat-dialog-title>Are you sure?</h1>
                <mat-dialog-content>
                    <p>Your already got {{passedData.progress}}%<P>
                    <p *ngIf="(passedData.progress.progress===100)">WELDONE!!!</p>
                </mat-dialog-content>
                <mat-dialog-actions>
                    <button mat-button [mat-dialog-close]="true">Yes</button>
                    <button mat-button [mat-dialog-close]="false">No</button>
                </mat-dialog-actions>`
})
export class FinishTastingComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any){}

}