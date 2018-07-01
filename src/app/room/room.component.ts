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
  gameStarted = false;
  inRoom = false;
  partyRevealed = false;
  users: any = [];

  userName = '';
  roomName = '';
  revealedParty = '';
  currentUser = {};
  hitler = {};
  fascists = [];

  constructor(private sharedService: SharedService, private gameService: GameService, private socketService: SocketService) {
    this.roomHost = this.sharedService.roomHost.value;

    socketService.gameStarted().subscribe(() => {
      this.gameStarted = true;
    });

    socketService.newUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);

      this.currentUser = this.users.filter((user: any) => user.userName === this.userName)[0];
      this.hitler = this.users.filter((user: any) => user.role === 'hitler')[0];
      this.fascists = this.users.filter((user: any) => user.party === 'fascist' && user.role !== 'hitler');
      console.log('currentUser', this.currentUser);
      console.log('hitler', this.hitler);
      console.log('fascists', this.fascists);
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
    this.gameStarted = true;
    this.gameService.startGame(this.users);
  }

  revealParty(user) {
    this.partyRevealed = true;
    this.revealedParty = user.party;
  }
}
