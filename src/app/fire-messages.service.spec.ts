import { TestBed } from '@angular/core/testing';

import { FireMessagesService } from './fire-messages.service';

describe('FireMessagesService', () => {
  let service: FireMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
