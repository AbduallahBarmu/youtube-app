import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  constructor(private http: HttpClient) { }

  getYoutubeChannels(searchValue: string): Observable<any> {
    const apiKey = "AIzaSyDaJVbtHYpPHqpKYyNjz5_0K3YH5JJJk2k";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q${searchValue}&type=channel&key=${apiKey}&maxResults=20`;
    return this.http.get(url);
  }
}
