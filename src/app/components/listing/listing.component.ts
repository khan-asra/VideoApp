import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import Video from 'src/app/model/Videos';
import { HomeScreenComponent } from '../home-screen/home-screen.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  VideoListFromHomeScreen:Video[]=[];
  constructor(private homeScreen:HomeScreenComponent) { 
    

    
      this.homeScreen.VideoObservable.subscribe(
       (dataFromHomeScreen)=>{
        console.log("Data Recieved!!")
        console.log(dataFromHomeScreen)
        this.VideoListFromHomeScreen=dataFromHomeScreen
      }
    )
  }

  ngOnInit(): void {
  }


}
