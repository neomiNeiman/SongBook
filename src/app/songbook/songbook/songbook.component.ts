import { Component, OnInit } from '@angular/core';
import { SongService, ISong } from 'src/app/song.service';

@Component({
  selector: 'app-songbook',
  templateUrl: './songbook.component.html',
  styleUrls: ['./songbook.component.scss']
})
export class SongbookComponent implements OnInit {

  constructor(private songService: SongService) { }
  public songList: ISong[] = [];

  ngOnInit() {
    this.songList = this.songService.getSongList();

     /*
    var selectedCategory: CATEGORY_ENUM = CATEGORY_ENUM.HEBREW;
    var filteredList: ISong[] = this.songList.filter((currentSong: ISong) => {

      // If song belonggs to selectedCategory return true
      // else return false;

      var foundCategory: CATEGORY_ENUM = currentSong.categories.find(c => c === selectedCategory);

      return !!foundCategory;
    });
    */

  }

}
