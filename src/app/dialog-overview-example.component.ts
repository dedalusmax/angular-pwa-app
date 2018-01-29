import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

import { Currency } from './shared/models/currency';
import { CurrencyService } from './shared/services/currency.service';

@Component({
    selector: 'app-dialog-overview-example',
    templateUrl: 'dialog-overview-example.html',
    styleUrls: ['./dialog-overview-example.component.scss']
})
export class DialogOverviewExampleComponent implements OnInit {

    public model: Currency;

    constructor(
        private dataService: CurrencyService,
        public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,
        @Inject(MAT_DIALOG_DATA) public theme: any,
        overlayContainer: OverlayContainer) {
        if (theme) {
            overlayContainer.getContainerElement().classList.add('m2app-dark');
        } else {
            overlayContainer.getContainerElement().classList.remove('m2app-dark');
        }
    }

    ngOnInit() {
        this.model = new Currency();
    }

    save() {

        this.dataService.saveCurrency(this.model)
            .subscribe((res: any) => {
                this.dialogRef.close(this.model);
            },
            error => {
                console.log(error.message);
            });
    }
}
