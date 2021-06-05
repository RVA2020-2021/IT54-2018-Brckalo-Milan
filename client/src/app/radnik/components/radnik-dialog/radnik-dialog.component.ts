import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Radnik } from '../../models/radnik.model';

import { RadnikService } from '../../services/radnik.service';

@Component({
  selector: 'app-radnik-dialog',
  templateUrl: './radnik-dialog.component.html',
  styleUrls: ['./radnik-dialog.component.css']
})
export class RadnikDialogComponent implements OnInit {
  isUpdate: boolean;
  title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Radnik,
    private service: RadnikService,
    private dialogRef: MatDialogRef<RadnikDialogComponent>,
    private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.title = this.isUpdate ? 'Ažuriranje podataka o radniku' : 'Kreiranje novog radnika';
  }

  save() {
    this.isUpdate ? this.update(): this.create();

    this.cancel();
  }

  create() {
    this.service.post(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste kreirali novog radnika.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška.', null, { duration: 2000 }));
  }

  update() {
    this.service.put(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste ažurirali radnika.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška. Pogledajte u konzoli...', null, { duration: 2000 }));
  }

  cancel() {
    this.dialogRef.close();
  }
}
