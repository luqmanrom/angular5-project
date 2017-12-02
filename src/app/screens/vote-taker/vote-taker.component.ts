import { Component }      from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { VotersService } from '../../services/voters.service';

@Component({
 selector: 'app-vote-taker',
 template: `
   <h2>Should mankind colonize the Universe?</h2>
   <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
   <app-voter *ngFor="let voter of voters"
     [name]="voter"
     (onVoted)="onVoted($event)">
   </app-voter>
 `
})
export class VoteTakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters: Array<string>;

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  constructor(private votersService : VotersService) {

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.voters = this.votersService.getVoters();
    
  }
}