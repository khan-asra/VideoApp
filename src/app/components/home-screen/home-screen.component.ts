import { Component, OnInit, Output } from '@angular/core';
import Video from 'src/app/model/Videos';
import { DailyMotionServiceService } from 'src/app/daily-motion-service.service';
import { BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private data:DailyMotionServiceService) { }
 //FIELD
@Output() dataListFromAPI:Video[]=[]
searchWord:string=''

ngOnInit(): void {
    }

  //Getting videos from api and saving it in the array
    getVideos=()=>{
    this.data.getMatchingVideos(this.searchWord).subscribe((dataApi)=>{
    console.log("Got data from api")
    console.log(dataApi);
    this.dataListFromAPI=dataApi['list']
    console.log(this.dataListFromAPI)
    //publish information of the 
    this.VideoObservable.next(this.dataListFromAPI)
  })
}

video: Video = {} as Video;
VideoObservable = new BehaviorSubject<Video[]>([]);

}


//will also try to send the search word.