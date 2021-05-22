import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  constructor(private dialogRef: MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public closeMe() {
    this.dialogRef.close();
  }

}
