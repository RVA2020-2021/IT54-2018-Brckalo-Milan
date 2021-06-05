import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreduzeceListComponent } from './components/preduzece-list/preduzece-list.component';

const routes: Routes = [
  {
    path: '',
    component: PreduzeceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreduzeceRoutingModule {}
