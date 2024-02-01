import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { YoutubeService } from "src/app/services/youtube.service";

@Component({
  selector: "app-channel",
  templateUrl: "./channel.component.html",
  styleUrls: ["./channel.component.css"]
})
export class ChannelComponent implements OnInit {
  channels:any
  searchValue: string = '';


  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.getChannels()
  }

  
  getChannels() {
    this.youtubeService.getYoutubeChannels(this.searchValue).subscribe(data => {
      this.channels = data.items;
      console.log(this.channels);
    });
  }

  filterSearch(searchResult:string){
    if (!searchResult) {
      this.channels = this.channels;
      return;
    }
    this.channels = this.channels.filter(
      (channelId: string) => channelId?.toLowerCase().includes(searchResult.toLowerCase())
    );
  }

}
