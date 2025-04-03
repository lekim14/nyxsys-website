import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './contact-us-section.component.html',
  styleUrl: './contact-us-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsSectionComponent {

  private recaptchaV3Service = inject(ReCaptchaV3Service);

  contactUs: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
    to: new FormControl('info@caltondatx.com'),
    recaptchaToken: new FormControl(null),
  });

  constructor(private utils: UtilityService) { }

  onClickSendEmail() {
    if (this.contactUs.invalid) return;
    this.recaptchaV3Service.execute('contactUs').subscribe((token) => {
      this.contactUs.patchValue({ recaptchaToken: token });
      this.utils.onSendEmail(this.contactUs).subscribe({
        next: (result: any) => {
          this.contactUs.reset();
          this.utils.showSnackbar('Email sent successfully!');
        },
        error: (error) => {
          this.utils.showSnackbar('Failed to send email. Please try again later.');
          console.error('Error sending email:', error);
        }
      })
    });   
  }
}
