import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SektorListComponent } from './components/sektor-list/sektor-list.component';
import { SektorDetailComponent } from './components/sektor-detail/sektor-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SektorListComponent
  },
  {
    path: ':id',
    component: SektorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SektorRoutingModule {}
