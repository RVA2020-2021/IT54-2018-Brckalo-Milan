import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadnikListComponent } from './components/radnik-list/radnik-list.component';

const routes: Routes = [
  {
    path: '',
    component: RadnikListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadnikRoutingModule {}
