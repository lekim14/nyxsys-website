import { Component } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './contact-us-section.component.html',
  styleUrl: './contact-us-section.component.scss'
})
export class ContactUsSectionComponent {

  contactUs: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    contact: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
    to: new FormControl('info@caltondatx.com')
  });

  constructor(private utils: UtilityService) { }

  onClickSendEmail() {
    this.utils.onSendEmail(this.contactUs.value)
  }
}
