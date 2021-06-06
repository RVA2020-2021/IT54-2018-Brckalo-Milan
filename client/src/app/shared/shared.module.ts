import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { MenuComponent } from './components/menu/menu.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { BottomSheetMenuComponent } from './components/bottom-sheet-menu/bottom-sheet-menu.component';
import { AppInfoDialogComponent } from './components/app-info-dialog/app-info-dialog.component';
import { AuthorInfoDialogComponent } from './components/author-info-dialog/author-info-dialog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [
    MenuComponent,
    DeleteDialogComponent,
    BottomSheetMenuComponent,
    AppInfoDialogComponent,
    AuthorInfoDialogComponent,
    PageNotFoundComponent
  ],
  exports: [
    MenuComponent,
    DeleteDialogComponent,
    BottomSheetMenuComponent,
    AppInfoDialogComponent,
    AuthorInfoDialogComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule {}
