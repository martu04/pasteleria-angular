import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RecetasListComponent } from './recetas-list.component';

describe('RecetasListComponent', () => {
  let component: RecetasListComponent;
  let fixture: ComponentFixture<RecetasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule], 
      declarations: [ RecetasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
