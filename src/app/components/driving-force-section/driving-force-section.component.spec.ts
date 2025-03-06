import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingForceSectionComponent } from './driving-force-section.component';

describe('DrivingForceSectionComponent', () => {
  let component: DrivingForceSectionComponent;
  let fixture: ComponentFixture<DrivingForceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivingForceSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrivingForceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
