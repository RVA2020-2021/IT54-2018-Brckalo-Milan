import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { ObrazovanjeRoutingModule } from './obrazovanje-routing.module';

import { ObrazovanjeComponent } from './obrazovanje.component';
import { ObrazovanjeListComponent } from './components/obrazovanje-list/obrazovanje-list.component';
import { ObrazovanjeSingleComponent } from './components/obrazovanje-single/obrazovanje-single.component';

import { ObrazovanjeService } from './services/obrazovanje.service';

@NgModule({
  declarations: [
    ObrazovanjeComponent,
    ObrazovanjeListComponent,
    ObrazovanjeSingleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatBottomSheetModule,
    ObrazovanjeRoutingModule
  ],
  providers: [ObrazovanjeService]
})
export class ObrazovanjeModule {}
