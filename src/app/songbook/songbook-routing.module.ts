import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongbookComponent } from './songbook/songbook.component';

const routes: Routes = [
  { path: '', component: SongbookComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongbookRoutingModule { }
