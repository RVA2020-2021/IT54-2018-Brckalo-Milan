import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';

import { AppInfoDialogComponent } from '../app-info-dialog/app-info-dialog.component';
import { AuthorInfoDialogComponent } from '../author-info-dialog/author-info-dialog.component';

@Component({
  selector: 'app-bottom-sheet-menu',
  templateUrl: './bottom-sheet-menu.component.html',
  styleUrls: ['./bottom-sheet-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetMenuComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetMenuComponent>, private dialog: MatDialog) {}

  openDialog(dialogId: string) {
    this.bottomSheetRef.dismiss();

    switch (dialogId) {
      case 'APP':
        this.dialog.open(AppInfoDialogComponent);

        break;
      case 'AUTHOR':
        this.dialog.open(AuthorInfoDialogComponent);

        break;
    }
  }
}
