import { Injectable } from '@angular/core';

@Injectable()
export class SecretHitlerService {

  constructor() { }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  randomizeUsers(users: any) {
    const random = this.shuffleArray(Array.from(Array(users.length).keys()));
    const badNum = (users.length - 3) / 2 // Ex: 6,7 people will have 2 fascists minus hitler
    for (let i = 0; i < badNum; i++) {
      users[random[i]].role = users[random[i]].party = 'fascist';
    }
    users[random[badNum]].role = 'hitler';
    users[random[badNum]].party = 'fascist';
    for (let i = badNum + 1; i < users.length; i++) {
      users[random[i]].role = users[random[i]].party = 'liberal';
    }

    return users;
  }

}
