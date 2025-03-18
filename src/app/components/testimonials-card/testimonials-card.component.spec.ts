import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsCardComponent } from './testimonials-card.component';

describe('TestimonialsCardComponent', () => {
  let component: TestimonialsCardComponent;
  let fixture: ComponentFixture<TestimonialsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
