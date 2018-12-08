import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './theme/index/index.component';
import { PageNotFoundComponent } from './theme/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
