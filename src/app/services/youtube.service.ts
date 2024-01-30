import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  constructor(private http: HttpClient) { }

  getYoutubeChannels(channelId: string): Observable<any> {
    const apiKey = "AIzaSyDqcQqwIaLMNeXUzIOau0R1qG4QTaWXwS4";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q${channelId}&type=channel&key=${apiKey}&maxResults=20`;
    return this.http.get(url);
  }
}
