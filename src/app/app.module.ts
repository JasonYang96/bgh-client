import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/modules/shared.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoomComponent } from './room/room.component';

import { GameService } from './shared/services/game/game.service';
import { SecretHitlerService } from './shared/services/secret-hitler/secret-hitler.service';
import { SharedService } from './shared/services/shared/shared.service';
import { SocketService } from './shared/services/socket/socket.service';

const appRoutes: Routes = [
  { path: 'room', component: RoomComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    LandingPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    SharedModule,
  ],
  providers: [
    GameService,
    SecretHitlerService,
    SharedService,
    SocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
