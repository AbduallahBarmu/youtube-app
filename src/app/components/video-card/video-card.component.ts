import { Component, Input } from "@angular/core";
import { ChannelInfo } from "src/app/Interfaces/ChannelInfo";
import { YoutubeService } from "src/app/services/youtube.service";

@Component({
  selector: "app-video-card",
  templateUrl: "./video-card.component.html",
  styleUrls: ["./video-card.component.css"]
})
export class VideoCardComponent {
  @Input() channeData:any


  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {

  }


}
