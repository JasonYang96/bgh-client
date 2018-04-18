import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';

import { GameService } from './shared/service/game/game.service';
import { SharedService } from './shared/service/shared/shared.service';
import { SocketService } from './shared/service/socket/socket.service';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: 'room', component: RoomComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '', redirectTo:'landing', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    GameService,
    SharedService,
    SocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
