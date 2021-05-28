import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/obrazovanje'
  },
  {
    path: 'obrazovanje',
    loadChildren: () => import('./obrazovanje/obrazovanje.module').then(m => m.ObrazovanjeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
