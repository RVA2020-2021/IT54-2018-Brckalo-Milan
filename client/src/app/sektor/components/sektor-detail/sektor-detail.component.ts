import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';

import { Observable, Subscription } from 'rxjs';

import { Sektor } from '../../models/sektor.model';
import { Radnik } from 'src/app/radnik/models/radnik.model';

import { SektorService } from '../../services/sektor.service';
import { RadnikService } from 'src/app/radnik/services/radnik.service';

@Component({
  selector: 'app-sektor-detail',
  templateUrl: './sektor-detail.component.html',
  styleUrls: ['./sektor-detail.component.css']
})
export class SektorDetailComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  displayedColumns = ['id', 'imePrezime', 'brojLk'];
  dataSource: Radnik[];
  
  sektor$: Observable<Sektor>;

  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private sektor: SektorService,
    private radnik: RadnikService) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.sektor$ = this.sektor.getOne(id);
    
    this.subscription = this.radnik.getListBySektor(id).subscribe(data => this.dataSource = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
