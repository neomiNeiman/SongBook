import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongbookRoutingModule } from './songbook-routing.module';
import { SongbookComponent } from './songbook/songbook.component';
import { SongViewComponent } from '../song-view/song-view.component';
import { SongService } from '../song.service';

@NgModule({
  declarations: [SongbookComponent, SongViewComponent],
  imports: [
    CommonModule,
    SongbookRoutingModule
  ], providers: [SongService]
})
export class SongbookModule { }
