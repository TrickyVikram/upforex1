import { TestBed } from '@angular/core/testing';

import { WebBlogService } from './web-blog.service';

describe('WebBlogService', () => {
  let service: WebBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
