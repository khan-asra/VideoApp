import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { MyPlayListScreenComponent } from './components/my-play-list-screen/my-play-list-screen.component';

const routes: Routes = [
  {path:"home",component:HomeScreenComponent},
  {path:"playlist",component:MyPlayListScreenComponent},
  {path:"**",component:HomeScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
