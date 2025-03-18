import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceTestimonialsComponent } from './audience-testimonials.component';

describe('AudienceTestimonialsComponent', () => {
  let component: AudienceTestimonialsComponent;
  let fixture: ComponentFixture<AudienceTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudienceTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudienceTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
