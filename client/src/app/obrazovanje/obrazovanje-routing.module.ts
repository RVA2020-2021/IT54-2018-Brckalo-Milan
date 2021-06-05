import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObrazovanjeListComponent } from './components/obrazovanje-list/obrazovanje-list.component';
import { ObrazovanjeDetailComponent } from './components/obrazovanje-detail/obrazovanje-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ObrazovanjeListComponent
  },
  {
    path: ':id',
    component: ObrazovanjeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrazovanjeRoutingModule {}
