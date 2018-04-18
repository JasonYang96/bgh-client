import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  roomHost = new BehaviorSubject<boolean>(true);

  changeHost(roomHost: boolean) {
    this.roomHost.next(roomHost);
  }
}
