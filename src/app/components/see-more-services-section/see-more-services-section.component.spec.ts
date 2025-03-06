import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMoreServicesSectionComponent } from './see-more-services-section.component';

describe('SeeMoreServicesSectionComponent', () => {
  let component: SeeMoreServicesSectionComponent;
  let fixture: ComponentFixture<SeeMoreServicesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeMoreServicesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeMoreServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
