import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'fairwind-address-ip',
  templateUrl: './address-ip.component.html',
  styleUrls: ['./address-ip.component.scss']
})
export class AddressIpComponent {

  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '600px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


@Component({
  selector: 'fairwind-dialog-overview-example-dialog',
  templateUrl: './dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewExampleDialog {

  constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData, private snackBar: MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.snackBar.open('Eolienne ajoutée', 'Fermer', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
