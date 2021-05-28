import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObrazovanjeListComponent } from './components/obrazovanje-list/obrazovanje-list.component';

const routes: Routes = [
  {
    path: '',
    component: ObrazovanjeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrazovanjeRoutingModule {}
