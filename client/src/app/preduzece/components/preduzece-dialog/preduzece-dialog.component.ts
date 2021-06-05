import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Preduzece } from '../../models/preduzece.model';

import { PreduzeceService } from '../../services/preduzece.service';

@Component({
  selector: 'app-preduzece-dialog',
  templateUrl: './preduzece-dialog.component.html',
  styleUrls: ['./preduzece-dialog.component.css']
})
export class PreduzeceDialogComponent implements OnInit {
  isUpdate: boolean;
  title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Preduzece,
    private service: PreduzeceService,
    private dialogRef: MatDialogRef<PreduzeceDialogComponent>,
    private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.title = this.isUpdate ? 'Ažuriranje podataka o preduzeću' : 'Kreiranje novog preduzeća';
  }

  save() {
    this.isUpdate ? this.update(): this.create();

    this.cancel();
  }

  create() {
    this.service.post(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste kreirali novo preduzeće.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška.', null, { duration: 2000 }));
  }

  update() {
    this.service.put(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste ažurirali preduzeće.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška. Pogledajte u konzoli...', null, { duration: 2000 }));
  }

  cancel() {
    this.dialogRef.close();
  }
}
