import { Injectable } from '@angular/core';

enum CATEGORY_ENUM {
  ENGLISH = 1,
  HEBREW = 2,
  CHILDREN = 3,
}

export interface ISong {
  id: number;
  name: string;
  singer: string;
  lyrics?: string;
  categories?: CATEGORY_ENUM[];
  createDate: number;
}

// @Injectable({
//   providedIn: 'root'
// })
export class SongService {

  private songList: ISong[] = [
    {  id: 1,
       name: 'רצוף אהבה',
       singer: 'ישי ריבו',
       createDate: Date.now(),
       categories: [CATEGORY_ENUM.HEBREW, CATEGORY_ENUM.CHILDREN]
    }
   ];

   public getSongList(): ISong[] {
    return this.songList;
   }
  constructor() {
    this.init()
   }

   init() {
    var song1: ISong = {id: 2, name: 'אני שוב מתאהב', singer: 'גידי גוב', createDate: Date.now()};
    this.songList.push(song1);

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
