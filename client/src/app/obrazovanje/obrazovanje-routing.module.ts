import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObrazovanjeListComponent } from './components/obrazovanje-list/obrazovanje-list.component';
import { ObrazovanjeSingleComponent } from './components/obrazovanje-single/obrazovanje-single.component';

const routes: Routes = [
  {
    path: '',
    component: ObrazovanjeListComponent
  },
  {
    path: ':id',
    component: ObrazovanjeSingleComponent
  },
  {
    path: 'new',
    component: ObrazovanjeSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrazovanjeRoutingModule {}
