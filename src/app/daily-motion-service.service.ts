import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import Video from './model/Videos';

@Injectable({
  providedIn: 'root'
})
export class DailyMotionServiceService {

  constructor(private http:HttpClient) { }
//1.define the user dat a that this class will manage 
//2. define a function that other components can use to access the user data.
//function to get the data from API

getMatchingVideos = (term: string ): Observable<any> => { 
  let apiUrl = 'https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=' + term;
  return this.http.get<any>(apiUrl);
}
video: Video = {} as Video;

VideoObservable = new BehaviorSubject<Video>(this.video);
}
