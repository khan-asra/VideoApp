import { Injectable } from '@angular/core';
import Video from './model/Videos';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {
//1.  store the  playlist
private playList:Video[]=[]
  constructor() { }
//Observable that 
videoListObservable = new BehaviorSubject<Video[]>([])

  //add  video to the playlist

  addplaylist = (video:Video)=>{
    console.log(`Trying to add ${video.title}`);
    
    this.playList.push(video)
    console.log(`Video added to the playlist:${this.playList.length}`)
    this.videoListObservable.next(this.playList)
  }

  getPlayList= ()=>{
    return this.playList
  }

  removeAll=()=>{
    console.log(`SERVICE CLASS REMOVING ALL VIDEO. Number of team members updated :${this.playList.length}`)
    this.playList=[]
    this.videoListObservable.next(this.playList)
  }
}
