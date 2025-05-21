import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedLocationSectionComponent } from './led-location-section.component';

describe('LedLocationSectionComponent', () => {
  let component: LedLocationSectionComponent;
  let fixture: ComponentFixture<LedLocationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedLocationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LedLocationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
