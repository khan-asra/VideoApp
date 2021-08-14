import { Component, OnInit,Input } from '@angular/core';
import { DailyMotionServiceService } from 'src/app/daily-motion-service.service';
import Video from 'src/app/model/Videos';
import { UserDataServiceService } from 'src/app/user-data-service.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private data:DailyMotionServiceService,private userService:UserDataServiceService) { }

  ngOnInit(): void {
    //subscribe the updates on the  playlist
    //if the videos in the playlist ==0 
    this.userService.videoListObservable.subscribe((updateTeamList)=>{
      if(updateTeamList.length===0){
          this.isPlayList=false
      }
    }

    )

  }
public dataListFromAPI:Video[]=[]
isPlayList:boolean=false
@Input() video: Video = {} as Video;
buttonText:string="ADD TO PLAYLIST"

@Input() playlistShowbutton:boolean=false

addToPlayListPressed=()=>{
  console.log("Add button pressed")
  this.userService.addplaylist(this.video)
  this.isPlayList=true
  this.buttonText="Already added "
}

}