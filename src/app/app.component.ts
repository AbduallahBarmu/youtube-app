import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { YoutubeService } from "./services/youtube.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {}
}
