import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Radnik } from '../../models/radnik.model';

import { RadnikService } from '../../services/radnik.service';

import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { RadnikDialogComponent } from '../radnik-dialog/radnik-dialog.component';

import { DeleteDialog } from 'src/app/shared/models/delete-dialog.model';

import { Entity } from 'src/app/config/entity';

@Component({
  selector: 'app-radnik-list',
  templateUrl: './radnik-list.component.html',
  styleUrls: ['./radnik-list.component.css']
})
export class RadnikListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'imePrezime', 'brojLk', 'obrazovanje', 'sektor', 'opcije'];
  dataSource: MatTableDataSource<Radnik>;

  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private service: RadnikService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData() {
    this.subscription = this.service.getList().subscribe((data: Radnik[]) => {
      this.dataSource = new MatTableDataSource(data.sort((a, b) => a.id - b.id));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editData(radnik: Radnik) {
    const dialogRef = this.dialog.open(RadnikDialogComponent, { 
      data: radnik 
    });

    dialogRef.componentInstance.isUpdate = true;

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }

  deleteData(radnikId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { 
      data: new DeleteDialog(Entity.RADNIK, radnikId)
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
    const dialogRef = this.dialog.open(RadnikDialogComponent, { data: { 
      id: 0,
      ime: null, 
      prezime: null,
      brojLk: null,
      obrazovanje: null,
      sektor: null
    }});

    dialogRef.componentInstance.isUpdate = false;

    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }
}
