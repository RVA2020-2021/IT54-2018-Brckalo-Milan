import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { PreduzeceRoutingModule } from './preduzece-routing.module';

import { PreduzeceComponent } from './preduzece.component';
import { PreduzeceListComponent } from './components/preduzece-list/preduzece-list.component';
import { PreduzeceDialogComponent } from './components/preduzece-dialog/preduzece-dialog.component';
import { PreduzeceDetailComponent } from './components/preduzece-detail/preduzece-detail.component';

import { PreduzeceService } from './services/preduzece.service';

@NgModule({
  declarations: [
    PreduzeceComponent,
    PreduzeceListComponent,
    PreduzeceDialogComponent,
    PreduzeceDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatExpansionModule,
    PreduzeceRoutingModule
  ],
  providers: [PreduzeceService]
})
export class PreduzeceModule {}
