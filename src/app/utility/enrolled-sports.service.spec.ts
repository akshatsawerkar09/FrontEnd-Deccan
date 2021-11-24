import { TestBed } from '@angular/core/testing';

import { EnrolledSportsService } from './enrolled-sports.service';

describe('EnrolledSportsService', () => {
  let service: EnrolledSportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolledSportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
