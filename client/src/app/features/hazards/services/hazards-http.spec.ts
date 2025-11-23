import { TestBed } from '@angular/core/testing';

import { HazardsHttpService } from './hazards-http.service';

describe('HazardsHttpService', () => {
  let service: HazardsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HazardsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
