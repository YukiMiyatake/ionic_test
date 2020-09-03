import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreamingPage } from './streaming.page';

const routes: Routes = [
  {
    path: '',
    component: StreamingPage
  },
  {
    path: 'streaming',
    loadChildren: () => import('./streaming.module').then( m => m.StreamingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamingPageRoutingModule {}
