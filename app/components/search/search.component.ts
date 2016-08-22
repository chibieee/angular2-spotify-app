import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
    searchStr: string;
    searchRes: Artist[];

    constructor(private spotifyService: SpotifyService) {

     }

    ngOnInit() { }

    searchMusic() {
        this.spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            })

    }
}