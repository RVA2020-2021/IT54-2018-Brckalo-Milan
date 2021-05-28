import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ObrazovanjeRoutingModule } from './obrazovanje-routing.module';

import { ObrazovanjeComponent } from './obrazovanje.component';
import { ObrazovanjeListComponent } from './components/obrazovanje-list/obrazovanje-list.component';

@NgModule({
  declarations: [
    ObrazovanjeComponent,
    ObrazovanjeListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    ObrazovanjeRoutingModule
  ]
})
export class ObrazovanjeModule {}
