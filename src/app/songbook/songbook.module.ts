import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongbookRoutingModule } from './songbook-routing.module';
import { SongbookComponent } from './songbook/songbook.component';

@NgModule({
  declarations: [SongbookComponent],
  imports: [
    CommonModule,
    SongbookRoutingModule
  ]
})
export class SongbookModule { }
