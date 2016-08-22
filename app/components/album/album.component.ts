import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../../artist';
import { Album } from '../../../album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {
    id: string;
    album: Album[];

    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute) {

     }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })   

            })
     }
}