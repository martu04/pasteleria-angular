import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PostresListComponent } from './postres-list.component';

describe('PostresListComponent', () => {
  let component: PostresListComponent;
  let fixture: ComponentFixture<PostresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule], 
      declarations: [ PostresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PostresListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Lista de postres de Cocina Jacque Artesanal');
  });
});
