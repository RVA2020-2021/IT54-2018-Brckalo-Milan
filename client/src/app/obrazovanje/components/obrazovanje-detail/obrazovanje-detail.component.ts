import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';

import { Observable, Subscription } from 'rxjs';

import { Obrazovanje } from '../../models/obrazovanje.model';
import { Radnik } from 'src/app/radnik/models/radnik.model';

import { ObrazovanjeService } from '../../services/obrazovanje.service';
import { RadnikService } from 'src/app/radnik/services/radnik.service';

@Component({
  selector: 'app-obrazovanje-detail',
  templateUrl: './obrazovanje-detail.component.html',
  styleUrls: ['./obrazovanje-detail.component.css']
})
export class ObrazovanjeDetailComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  displayedColumns = ['id', 'imePrezime', 'brojLk'];
  dataSource: Radnik[];
  isEmpty: boolean;
  
  obrazovanje$: Observable<Obrazovanje>;

  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private obrazovanje: ObrazovanjeService,
    private radnik: RadnikService) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.obrazovanje$ = this.obrazovanje.getOne(id);

    this.subscription = this.radnik.getListByObrazovanje(id).subscribe(data => {
      this.isEmpty = data.length === 0;
      this.dataSource = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
