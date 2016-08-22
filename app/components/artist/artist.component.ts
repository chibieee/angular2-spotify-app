import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../../../artist';
import { Album } from '../../../album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist[];
    albums: Album[];
    constructor(
        private spotifyService: SpotifyService,
        private route: ActivatedRoute) {

     }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })

                this.spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })    

            })
     }
}