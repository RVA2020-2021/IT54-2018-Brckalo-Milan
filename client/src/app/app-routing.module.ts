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
  },
  {
    path: 'preduzece',
    loadChildren: () => import('./preduzece/preduzece.module').then(m => m.PreduzeceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
