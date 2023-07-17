import { TestBed } from '@angular/core/testing';

import { GravityFormService } from './gravity-form.service';

describe('GravityFormService', () => {
  let service: GravityFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GravityFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
