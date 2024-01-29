import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './components/channel/channel.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoListComponent } from './components/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    VideoCardComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
