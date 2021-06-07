import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Sektor } from '../../models/sektor.model';

import { SektorService } from '../../services/sektor.service';

import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { SektorDialogComponent } from '../sektor-dialog/sektor-dialog.component';

import { DeleteDialog } from 'src/app/shared/models/delete-dialog.model';

import { Entity } from 'src/app/config/entity';

@Component({
  selector: 'app-sektor-list',
  templateUrl: './sektor-list.component.html',
  styleUrls: ['./sektor-list.component.css']
})
export class SektorListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'naziv', 'oznaka', 'preduzece', 'opcije'];
  dataSource: MatTableDataSource<Sektor>;

  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private service: SektorService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData() {
    this.subscription = this.service.getList().subscribe((data: Sektor[]) => {
      this.dataSource = new MatTableDataSource(data.sort((a, b) => a.id - b.id));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editData(sektor: Sektor) {
    const dialogRef = this.dialog.open(SektorDialogComponent, { 
      data: sektor 
    });

    dialogRef.componentInstance.isUpdate = true;

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }

  deleteData(sektorId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { 
      data: new DeleteDialog(Entity.SEKTOR, sektorId)
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
    const dialogRef = this.dialog.open(SektorDialogComponent, { data: { 
      id: 0,
      naziv: null, 
      oznaka: null,
      preduzece: null
    }});

    dialogRef.componentInstance.isUpdate = false;

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }
}
