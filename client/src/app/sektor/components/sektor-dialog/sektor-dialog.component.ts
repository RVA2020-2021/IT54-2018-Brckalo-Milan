import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';

import { Sektor } from '../../models/sektor.model';
import { Preduzece } from 'src/app/preduzece/models/preduzece.model';

import { SektorService } from '../../services/sektor.service';
import { PreduzeceService } from '../../../preduzece/services/preduzece.service';

@Component({
  selector: 'app-sektor-dialog',
  templateUrl: './sektor-dialog.component.html',
  styleUrls: ['./sektor-dialog.component.css']
})
export class SektorDialogComponent implements OnInit {
  isUpdate: boolean;
  title: string;

  preduzece$: Observable<Preduzece[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Sektor,
    private sektor: SektorService,
    private preduzece: PreduzeceService,
    private dialogRef: MatDialogRef<SektorDialogComponent>,
    private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.title = this.isUpdate ? 'Ažuriranje podataka o sektoru' : 'Kreiranje novog sektora';

    this.preduzece$ = this.preduzece.getList();
  }

  save() {
    this.isUpdate ? this.update(): this.create();

    this.cancel();
  }

  create() {
    this.sektor.post(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste kreirali novi sektor.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška.', null, { duration: 2000 }));
  }

  update() {
    this.sektor.put(this.data).subscribe(
      () => this.snackbar.open('Uspješno ste ažurirali sektor.', null, { duration: 2000 }), 
      (error: Error) => this.snackbar.open('Dogodila se greška. Pogledajte u konzoli...', null, { duration: 2000 }));
  }

  cancel() {
    this.dialogRef.close();
  }

  focusOnSelected(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
