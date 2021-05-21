import { TestBed } from '@angular/core/testing';

import { FriendsFService } from './friends-f.service';

describe('FriendsFService', () => {
  let service: FriendsFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
