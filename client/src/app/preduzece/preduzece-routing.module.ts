import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreduzeceListComponent } from './components/preduzece-list/preduzece-list.component';
import { PreduzeceDetailComponent } from './components/preduzece-detail/preduzece-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PreduzeceListComponent
  },
  {
    path: ':id',
    component: PreduzeceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreduzeceRoutingModule {}
