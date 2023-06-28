import { TestBed } from '@angular/core/testing';

import { WoocommerceService } from './woocommerce.service';

describe('WoocommerceService', () => {
  let service: WoocommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoocommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
