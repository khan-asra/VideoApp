import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {​​​ FormsModule }​​​ from'@angular/forms'; //added 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListingComponent } from './components/listing/listing.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { MyPlayListScreenComponent } from './components/my-play-list-screen/my-play-list-screen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    NavigationComponent,
    ListingComponent,
    HomeScreenComponent,
    MyPlayListScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
