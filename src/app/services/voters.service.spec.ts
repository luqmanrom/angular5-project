import { TestBed, inject } from '@angular/core/testing';

import { VotersService } from './voters.service';

describe('VotersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotersService]
    });
  });

  it('should be created', inject([VotersService], (service: VotersService) => {
    expect(service).toBeTruthy();
  }));
});
