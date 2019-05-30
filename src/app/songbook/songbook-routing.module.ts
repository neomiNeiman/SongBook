import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongbookComponent } from './songbook/songbook.component';
import { SongViewComponent } from '../song-view/song-view.component';

const routes: Routes = [
  { path: '', component: SongbookComponent},
  { path: ':songId', component: SongViewComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongbookRoutingModule { }
