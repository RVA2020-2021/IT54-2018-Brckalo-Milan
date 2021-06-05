import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Obrazovanje } from '../../models/obrazovanje.model';

import { ObrazovanjeService } from '../../services/obrazovanje.service';

@Component({
  selector: 'app-obrazovanje-dialog',
  templateUrl: './obrazovanje-dialog.component.html',
  styleUrls: ['./obrazovanje-dialog.component.css']
})
export class ObrazovanjeDialogComponent implements OnInit {
  isUpdate: boolean;
  title: string;

  constructor(
    private service: ObrazovanjeService,
    private dialogRef: MatDialogRef<ObrazovanjeDialogComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Obrazovanje) {}

  ngOnInit() {
    this.title = this.isUpdate ? 'Ažuriranje podataka o obrazovanju' : 'Kreiranje novog obrazovanja';
  }

  save() {
    this.isUpdate ? this.update(): this.create();

    this.cancel();
  }

  create() {
    this.service.post(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste kreirali novo obrazovanje.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška.', null, { duration: 2000 }));
  }

  update() {
    this.service.put(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste ažurirali obrazovanje.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška. Pogledajte u konzoli...', null, { duration: 2000 }));
  }

  cancel() {
    this.dialogRef.close();
  }
}
