import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Sektor } from '../../models/sektor.model';

import { SektorService } from '../../services/sektor.service';

@Component({
  selector: 'app-sektor-dialog',
  templateUrl: './sektor-dialog.component.html',
  styleUrls: ['./sektor-dialog.component.css']
})
export class SektorDialogComponent implements OnInit {
  isUpdate: boolean;
  title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Sektor,
    private service: SektorService,
    private dialogRef: MatDialogRef<SektorDialogComponent>,
    private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.title = this.isUpdate ? 'Ažuriranje podataka o sektoru' : 'Kreiranje novog sektora';
  }

  save() {
    this.isUpdate ? this.update(): this.create();

    this.cancel();
  }

  create() {
    this.service.post(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste kreirali novi sektor.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška.', null, { duration: 2000 }));
  }

  update() {
    this.service.put(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste ažurirali sektor.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška. Pogledajte u konzoli...', null, { duration: 2000 }));
  }

  cancel() {
    this.dialogRef.close();
  }
}
