import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';

import { Observable, Subscription } from 'rxjs';

import { Preduzece } from '../../models/preduzece.model';
import { Sektor } from '../../../sektor/models/sektor.model';
import { Radnik } from '../../../radnik/models/radnik.model';

import { PreduzeceService } from '../../services/preduzece.service';
import { SektorService } from '../../../sektor/services/sektor.service';
import { RadnikService } from '../../../radnik/services/radnik.service';

@Component({
  selector: 'app-preduzece-detail',
  templateUrl: './preduzece-detail.component.html',
  styleUrls: ['./preduzece-detail.component.css']
})
export class PreduzeceDetailComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  displayedColumns1 = ['id', 'naziv', 'oznaka'];
  dataSource1: Sektor[];

  displayedColumns2 = ['id', 'imePrezime', 'brojLk'];
  dataSource2: Radnik[];
  
  preduzece$: Observable<Preduzece>;

  subscription1: Subscription;
  subscription2: Subscription;

  constructor(
    private route: ActivatedRoute,
    private preduzece: PreduzeceService,
    private sektor: SektorService,
    private radnik: RadnikService) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.preduzece$ = this.preduzece.getOne(id);
    
    this.subscription1 = this.sektor.getListByPreduzece(id).subscribe(data => this.dataSource1 = data);
    this.subscription2 = this.radnik.getListByPreduzece(id).subscribe(data => this.dataSource2 = data);
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
