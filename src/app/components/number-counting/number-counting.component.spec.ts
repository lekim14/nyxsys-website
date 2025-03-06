import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCountingComponent } from './number-counting.component';

describe('NumberCountingComponent', () => {
  let component: NumberCountingComponent;
  let fixture: ComponentFixture<NumberCountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberCountingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
