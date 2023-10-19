import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PostresDataService } from './postres-data.service';

describe('PostresDataService', () => {
  let service: PostresDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
    });
    service = TestBed.inject(PostresDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
