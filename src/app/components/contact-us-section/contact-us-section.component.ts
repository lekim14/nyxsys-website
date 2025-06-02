import { ChangeDetectionStrategy, Component, inject, Input, signal } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './contact-us-section.component.html',
  styleUrl: './contact-us-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsSectionComponent {

  @Input() services: string = '';

  isSending = signal<boolean>(false);

  mapURL = this.utils.sanitizeUrl(environment.mapURL);

  private recaptchaV3Service = inject(ReCaptchaV3Service);

  contactUs: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
    to: new FormControl('info@caltondatx.com'),
    services: new FormControl(this.services),
    recaptchaToken: new FormControl(null),
  });

  constructor(private utils: UtilityService) { }

  onClickSendEmail() {
    if (this.contactUs.invalid) return;
    this.isSending.set(true);
    this.recaptchaV3Service.execute('contactUs').subscribe((token) => {
      this.contactUs.patchValue({ recaptchaToken: token });
      this.utils.onSendEmail(this.contactUs).subscribe({
        next: (result: any) => {
          this.contactUs.reset();
          this.utils.showSnackbar('Email sent successfully!');
          this.isSending.set(false);
        },
        error: (error) => {
          this.utils.showSnackbar('Failed to send email. Please try again later.');
          console.error('Error sending email:', error);
          this.isSending.set(false);
        }
      })
    });   
  }
}
