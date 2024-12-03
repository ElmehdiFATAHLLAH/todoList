import { TestBed } from '@angular/core/testing';

import { DataContactService } from './data-contact.service';

describe('DataContactService', () => {
  let service: DataContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
