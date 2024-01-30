import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  channels: any; 
  
  constructor(private youtubeService: YoutubeService) {}
  
  
  ngOnInit() {
  
  }



}
