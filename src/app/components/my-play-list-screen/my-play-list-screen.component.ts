import { Component, OnInit } from '@angular/core';
import Video from 'src/app/model/Videos';
import { UserDataServiceService } from 'src/app/user-data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-play-list-screen',
  templateUrl: './my-play-list-screen.component.html',
  styleUrls: ['./my-play-list-screen.component.css']
})
export class MyPlayListScreenComponent implements OnInit {

  myplaylist:Video[]=[]

  videoSubscription= new Subscription()
  constructor(private userDataService:UserDataServiceService) { }

  ngOnInit(): void {

    //subscribe to the changes in the list
    this.videoSubscription=this.userDataService.videoListObservable.subscribe(
      //dataFromObservable is the copy of the video list from the service class
      (dataFromObservable)=>{
      this.myplaylist= dataFromObservable
    })
  }

  clearList=()=>{
    this.userDataService.removeAll()
    this.myplaylist=[]
  }
  ngOnDestroy(){
  this.videoSubscription.unsubscribe()
  }
}
