import { TestBed } from '@angular/core/testing';

import { AddhotelService } from './addhotel.service';

describe('AddhotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddhotelService = TestBed.get(AddhotelService);
    expect(service).toBeTruthy();
  });
});
