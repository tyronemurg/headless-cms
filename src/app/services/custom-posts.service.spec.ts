import { TestBed } from '@angular/core/testing';

import { CustomPostsService } from './custom-posts.service';

describe('CustomPostsService', () => {
  let service: CustomPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
