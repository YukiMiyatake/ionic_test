import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'streaming',
    loadChildren: () => import('./modal/streaming/streaming.module').then( m => m.StreamingPageModule)
  },
  {
    path: 'streaming-overlay',
    loadChildren: () => import('../../modal/streaming-overlay/streaming-overlay.module').then( m => m.StreamingOverlayPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
