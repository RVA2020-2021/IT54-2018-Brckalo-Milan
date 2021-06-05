import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';

import { Radnik } from '../../models/radnik.model';
import { Obrazovanje } from 'src/app/obrazovanje/models/obrazovanje.model';
import { Sektor } from 'src/app/sektor/models/sektor.model';

import { RadnikService } from '../../services/radnik.service';
import { ObrazovanjeService } from 'src/app/obrazovanje/services/obrazovanje.service';
import { SektorService } from 'src/app/sektor/services/sektor.service';

@Component({
  selector: 'app-radnik-dialog',
  templateUrl: './radnik-dialog.component.html',
  styleUrls: ['./radnik-dialog.component.css']
})
export class RadnikDialogComponent implements OnInit {
  isUpdate: boolean;
  title: string;

  obrazovanje$: Observable<Obrazovanje[]>;
  sektor$: Observable<Sektor[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Radnik,
    private radnik: RadnikService,
    private obrazovanje: ObrazovanjeService,
    private sektor: SektorService,
    private dialogRef: MatDialogRef<RadnikDialogComponent>,
    private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.title = this.isUpdate ? 'Ažuriranje podataka o radniku' : 'Kreiranje novog radnika';

    this.obrazovanje$ = this.obrazovanje.getList();
    this.sektor$ = this.sektor.getList();
  }

  save() {
    this.isUpdate ? this.update(): this.create();

    this.cancel();
  }

  create() {
    this.radnik.post(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste kreirali novog radnika.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška.', null, { duration: 2000 }));
  }

  update() {
    this.radnik.put(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste ažurirali radnika.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška. Pogledajte u konzoli...', null, { duration: 2000 }));
  }

  cancel() {
    this.dialogRef.close();
  }
}
