import { TestBed } from '@angular/core/testing';

import { DemoRestService } from './demo-rest.service';

describe('DemoRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoRestService = TestBed.get(DemoRestService);
    expect(service).toBeTruthy();
  });
});
