import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RecetasDataService } from './recetas-data.service';

describe('RecetasDataService', () => {
  let service: RecetasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RecetasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
