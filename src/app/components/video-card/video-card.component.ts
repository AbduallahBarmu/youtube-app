import { Component, Input } from "@angular/core";
import { ChannelInfo } from "src/app/Interfaces/ChannelInfo";
import { YoutubeService } from "src/app/services/youtube.service";

@Component({
  selector: "app-video-card",
  templateUrl: "./video-card.component.html",
  styleUrls: ["./video-card.component.css"]
})
export class VideoCardComponent {
  // channels: ChannelInfo[]=[]
  channels:any;
  @Input() videoData: any; 

  constructor(private youtubeService: YoutubeService) {}
  
  
  ngOnInit() {
    this.showChannels("programming");
  }
  
  showChannels(channelId:string) {
    this.youtubeService.getYoutubeChannels(channelId).subscribe(data => {
      this.channels = data.items;
      console.log(this.channels);
    });
  }
}
