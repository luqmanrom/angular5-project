import { Injectable } from '@angular/core';

@Injectable()
export class VotersService {

  voters: Array<string> = ['Luqman', 'Ali', 'Abu'];

  constructor() { }


  getVoters() {

    return this.voters;
  }

}
