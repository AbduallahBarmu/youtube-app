import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "./services/youtube.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  channels: any[] = [];

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.showChannels();
  }

  showChannels() {
    // this.youtubeService.getYoutubeChannels("programming").subscribe(
    //   (response) => {
    //     this.channels = response;
    //     // console.log(this.channels)
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
    this.youtubeService.getYoutubeChannels("programming").subscribe((data) =>{
      console.log(data)
    })
  }
}
