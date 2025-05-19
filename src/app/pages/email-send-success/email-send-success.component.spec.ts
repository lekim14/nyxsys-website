import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSendSuccessComponent } from './email-send-success.component';

describe('EmailSendSuccessComponent', () => {
  let component: EmailSendSuccessComponent;
  let fixture: ComponentFixture<EmailSendSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSendSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailSendSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
