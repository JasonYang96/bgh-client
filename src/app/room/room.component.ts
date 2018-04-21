import { Component } from '@angular/core';

import { SharedService } from '../shared/services/shared/shared.service';
import { GameService } from '../shared/services/game/game.service';
import { SocketService } from '../shared/services/socket/socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  roomHost: boolean;
  inRoom = false;
  users: any = [];
  userName = '';
  roomName = '';

  constructor(private sharedService: SharedService, private gameService: GameService, private socketService: SocketService) {
    this.roomHost = this.sharedService.roomHost.value;

    socketService.newUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  createGame() {
    this.inRoom = true;
    this.gameService.createGame(this.roomName, this.userName);
  }

  joinGame() {
    this.inRoom = true;
    this.gameService.joinGame(this.roomName, this.userName);
  }

  startGame() {
    if (this.users.length < 5) { return; }
    this.gameService.startGame(this.users);
  }
}
