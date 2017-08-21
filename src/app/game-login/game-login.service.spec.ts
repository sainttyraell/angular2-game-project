import { TestBed, inject } from '@angular/core/testing';

import { GameLoginService } from './game-login.service';

describe('GameLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameLoginService]
    });
  });

  it('should be created', inject([GameLoginService], (service: GameLoginService) => {
    expect(service).toBeTruthy();
  }));
});
