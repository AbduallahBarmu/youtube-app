import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './components/channel/channel.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import {HttpClientModule } from '@angular/common/http'
import { ChannelModule } from './components/channel/channel.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    VideoCardComponent,
    VideoListComponent
  ],
  imports: [
    ChannelModule,
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
