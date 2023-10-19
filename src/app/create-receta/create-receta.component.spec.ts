import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CreateRecetaComponent } from './create-receta.component';

describe('CreateRecetaComponent', () => {
  let component: CreateRecetaComponent;
  let fixture: ComponentFixture<CreateRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ CreateRecetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
