import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'app-dialog-overview-example',
    templateUrl: 'dialog-overview-example.html',
    styleUrls: ['./dialog-overview-example.component.scss']
})
export class DialogOverviewExampleComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,
        @Inject(MAT_DIALOG_DATA) public theme: any,
        overlayContainer: OverlayContainer) {
        if (theme) {
            overlayContainer.getContainerElement().classList.add('m2app-dark');
        } else {
            overlayContainer.getContainerElement().classList.remove('m2app-dark');
        }
    }
}
