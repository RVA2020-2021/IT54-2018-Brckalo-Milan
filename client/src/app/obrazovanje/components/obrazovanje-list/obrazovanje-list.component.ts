import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Obrazovanje } from '../../interfaces/obrazovanje.interface';

import { ObrazovanjeService } from '../../services/obrazovanje.service';

import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { ObrazovanjeSingleComponent } from '../obrazovanje-single/obrazovanje-single.component';

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
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editData(obrazovanje: Obrazovanje) {
    const dialogRef = this.dialog.open(ObrazovanjeSingleComponent, { data: obrazovanje });

    dialogRef.componentInstance.isUpdate = true;

    dialogRef.afterClosed().subscribe(isUpdate => {
      if (isUpdate) {
        this.loadData();
      }
    });
  }

  deleteData(obrazovanjeId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { data: Boolean });

    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm) {
        this.service.delete(obrazovanjeId);
      }
    });
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
