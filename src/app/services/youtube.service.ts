import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  constructor(private http: HttpClient) { }

  getYoutubeChannels(channelName:any): Observable <any> {
    const apiKey = "AIzaSyDBFkBgNA5qbb9tzA-B40ZDhEUQSld6bio" ; 
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q"+channelName+"&type=channel&key="+apiKey+"&maxResults=20"
    
    return this.http.get<any>(url)
  }
}
