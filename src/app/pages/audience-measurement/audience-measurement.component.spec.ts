import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceMeasurementComponent } from './audience-measurement.component';

describe('AudienceMeasurementComponent', () => {
  let component: AudienceMeasurementComponent;
  let fixture: ComponentFixture<AudienceMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudienceMeasurementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudienceMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
