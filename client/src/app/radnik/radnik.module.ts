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

import { RadnikRoutingModule } from './radnik-routing.module';

import { RadnikComponent } from './radnik.component';
import { RadnikListComponent } from './components/radnik-list/radnik-list.component';
import { RadnikDialogComponent } from './components/radnik-dialog/radnik-dialog.component';

import { RadnikService } from './services/radnik.service';

@NgModule({
  declarations: [
    RadnikComponent,
    RadnikListComponent,
    RadnikDialogComponent
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
    RadnikRoutingModule
  ],
  providers: [RadnikService]
})
export class RadnikModule {}
