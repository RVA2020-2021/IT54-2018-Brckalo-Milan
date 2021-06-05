import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ObrazovanjeService } from 'src/app/obrazovanje/services/obrazovanje.service';
import { PreduzeceService } from 'src/app/preduzece/services/preduzece.service';

import { DeleteDialog } from '../../models/delete-dialog.model';

import { Entity } from 'src/app/config/entity';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialog,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private snackbar: MatSnackBar,
    private obrazovanje: ObrazovanjeService,
    private preduzece: PreduzeceService) {}

  cancel() {
    this.dialogRef.close();
  }

  delete() {
    switch (this.data.entity) {
      case Entity.OBRAZOVANJE:
        this.obrazovanje.delete(this.data.id).subscribe(
          () => this.snackbar.open(`Uspješno izbrisali obrazovanje sa ID-em ${this.data.id}.`, null, { duration: 2000 }), 
          (error: Error) => this.snackbar.open('Dogodila se greška. Pogledajte u konzoli...', null, { duration: 2000 }));

        break;
      case Entity.PREDUZECE:
        this.preduzece.delete(this.data.id).subscribe(
          () => this.snackbar.open(`Uspješno izbrisali preduzeće sa ID-em ${this.data.id}.`, null, { duration: 2000 }), 
          (error: Error) => this.snackbar.open('Dogodila se greška. Pogledajte u konzoli...', null, { duration: 2000 }));

        break;
      case Entity.SEKTOR:
        break;
      case Entity.RADNIK:
        break;
    }

    this.cancel();
  }
}
