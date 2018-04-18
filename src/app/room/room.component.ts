import { Component } from '@angular/core';

import { SharedService } from '../shared/service/shared/shared.service';
import { GameService } from '../shared/service/game/game.service';
import { SocketService } from '../shared/service/socket/socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  roomHost: boolean;
  users: any = [];
  currentUser: string = '';

  constructor(private sharedService: SharedService, private gameService: GameService, private socketService: SocketService) {
    this.roomHost = this.sharedService.roomHost.value;

    socketService.newUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  createGame(roomName, userName) {
    this.currentUser = userName;
    this.gameService.createGame(roomName, userName);
  }

  joinGame(roomName, userName) {
    this.currentUser = userName;
    this.gameService.joinGame(roomName, userName);
  }

  startGame() {
    this.gameService.startGame(this.users);
  }
}
