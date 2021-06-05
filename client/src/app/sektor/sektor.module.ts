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
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { SektorRoutingModule } from './sektor-routing.module';

import { SektorComponent } from './sektor.component';
import { SektorListComponent } from './components/sektor-list/sektor-list.component';
import { SektorDialogComponent } from './components/sektor-dialog/sektor-dialog.component';
import { SektorDetailComponent } from './components/sektor-detail/sektor-detail.component';

import { SektorService } from './services/sektor.service';

@NgModule({
  declarations: [
    SektorComponent,
    SektorListComponent,
    SektorDialogComponent,
    SektorDetailComponent
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
    MatSelectModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    SektorRoutingModule
  ],
  providers: [SektorService]
})
export class SektorModule {}
