import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Preduzece } from '../../models/preduzece.model';

import { PreduzeceService } from '../../services/preduzece.service';

import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { PreduzeceDialogComponent } from '../preduzece-dialog/preduzece-dialog.component';

import { DeleteDialog } from 'src/app/shared/models/delete-dialog.model';

import { Entity } from 'src/app/config/entity';

@Component({
  selector: 'app-preduzece-list',
  templateUrl: './preduzece-list.component.html',
  styleUrls: ['./preduzece-list.component.css']
})
export class PreduzeceListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'naziv', 'opis', 'pib', 'sediste', 'opcije'];
  dataSource: MatTableDataSource<Preduzece>;

  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private service: PreduzeceService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData() {
    this.subscription = this.service.getList().subscribe((data: Preduzece[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editData(preduzece: Preduzece) {
    const dialogRef = this.dialog.open(PreduzeceDialogComponent, { 
      data: preduzece 
    });

    dialogRef.componentInstance.isUpdate = true;

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }

  deleteData(preduzeceId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { 
      data: new DeleteDialog(Entity.PREDUZECE, preduzeceId)
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
    const dialogRef = this.dialog.open(PreduzeceDialogComponent, { data: { 
      id: 0,
      naziv: null, 
      opis: null, 
      pib: null,
      sediste: null 
    }});

    dialogRef.componentInstance.isUpdate = false;

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }
}
