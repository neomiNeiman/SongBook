import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-view',
  templateUrl: './song-view.component.html',
  styleUrls: ['./song-view.component.scss']
})
export class SongViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
   /* this.route.params.subscribe((params) => {
      var id = params.songId;
    });*/
    var id = this.route.snapshot.params.get('songId');
  }

}
