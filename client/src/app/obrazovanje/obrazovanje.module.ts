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

import { ObrazovanjeRoutingModule } from './obrazovanje-routing.module';

import { ObrazovanjeComponent } from './obrazovanje.component';
import { ObrazovanjeListComponent } from './components/obrazovanje-list/obrazovanje-list.component';
import { ObrazovanjeDialogComponent } from './components/obrazovanje-dialog/obrazovanje-dialog.component';
import { ObrazovanjeDetailComponent } from './components/obrazovanje-detail/obrazovanje-detail.component';

import { ObrazovanjeService } from './services/obrazovanje.service';

@NgModule({
  declarations: [
    ObrazovanjeComponent,
    ObrazovanjeListComponent,
    ObrazovanjeDialogComponent,
    ObrazovanjeDetailComponent
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
    ObrazovanjeRoutingModule
  ],
  providers: [ObrazovanjeService]
})
export class ObrazovanjeModule {}
