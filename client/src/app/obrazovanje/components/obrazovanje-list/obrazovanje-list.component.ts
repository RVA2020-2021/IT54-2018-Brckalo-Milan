import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Obrazovanje } from '../../models/obrazovanje.model';

import { ObrazovanjeService } from '../../services/obrazovanje.service';

import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { ObrazovanjeDialogComponent } from '../obrazovanje-dialog/obrazovanje-dialog.component';

import { DeleteDialog } from 'src/app/shared/models/delete-dialog.model';

import { Entity } from 'src/app/config/entity';

@Component({
  selector: 'app-obrazovanje-list',
  templateUrl: './obrazovanje-list.component.html',
  styleUrls: ['./obrazovanje-list.component.css']
})
export class ObrazovanjeListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'naziv', 'opis', 'sss', 'opcije'];
  dataSource: MatTableDataSource<Obrazovanje>;

  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private service: ObrazovanjeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData() {
    this.subscription = this.service.getList().subscribe((data: Obrazovanje[]) => {
      this.dataSource = new MatTableDataSource(data.sort((a, b) => a.id - b.id));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editData(obrazovanje: Obrazovanje) {
    const dialogRef = this.dialog.open(ObrazovanjeDialogComponent, { 
      data: obrazovanje 
    });

    dialogRef.componentInstance.isUpdate = true;

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }

  deleteData(obrazovanjeId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { 
      data: new DeleteDialog(Entity.OBRAZOVANJE, obrazovanjeId)
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ObrazovanjeDialogComponent, { data: { 
      id: 0,
      naziv: null, 
      opis: null, 
      stepenStrucneSpreme: null 
    }});

    dialogRef.componentInstance.isUpdate = false;

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }
}
