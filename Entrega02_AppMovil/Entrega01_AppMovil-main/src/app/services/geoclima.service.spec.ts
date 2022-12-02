import { TestBed } from '@angular/core/testing';

import { GeoclimaService } from './geoclima.service';

describe('GeoclimaService', () => {
  let service: GeoclimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoclimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
