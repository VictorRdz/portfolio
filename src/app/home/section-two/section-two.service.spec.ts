import { TestBed } from '@angular/core/testing';

import { SectionTwoService } from './section-two.service';

describe('SectionTwoService', () => {
  let service: SectionTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
