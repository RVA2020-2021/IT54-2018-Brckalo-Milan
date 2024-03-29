import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

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
  },
  {
    path: 'sektor',
    loadChildren: () => import('./sektor/sektor.module').then(m => m.SektorModule)
  },
  {
    path: 'radnik',
    loadChildren: () => import('./radnik/radnik.module').then(m => m.RadnikModule)
  },
  { 
    path: '**',
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
