import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { ReCaptchaV3Service } from 'ng-recaptcha';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule, ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class ContactsComponent implements OnInit {
  
  private recaptchaV3Service = inject(ReCaptchaV3Service);

  siteKey: string = environment.siteKey;
  isSending = signal<boolean>(false);
  secureToken: string = '358cf574-eeb6-4522-9a42-8e332a6cacf9';

  services = computed(() => {
    const services: any = this.utils.services;
    return services.map((data: any) => data.title)
  })

  isVisible: boolean[] = [false, false];

  contactUs: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
    to: new FormControl('info@caltondatx.com'),
    services: new FormControl(null, [Validators.required]),
    recaptchaToken: new FormControl(null),
  });

  emailAddress: string = 'inquire@nyxsys.ph';
  address: string = 'G/F Paragon Plaza Bldg., 162 EDSA cor. Reliance St., Mandaluyong City, PH';
  phone: string = '(02) 8687 0503 loc. 310';

  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/NyxsysPh/', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/nyxsysph/', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com/nyxsysph', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://ph.linkedin.com/in/nyxsysph', icon: 'linkedin' },
  ];

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.contact-item');

    elements.forEach((element, index) => {
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })

    this.utils.setPageTitle('Contact Nyxsys Philippines | Let’s Connect & Collaborate');
    
    this.utils.setMetaUpdateTag('title', 'Contact Nyxsys Philippines | Let’s Connect & Collaborate',);
    this.utils.setMetaUpdateTag(
      'description',
      "Need digital advertising solutions? Contact Nyxsys Philippines for expert DOOH, LED, and business tech services. Let’s build something great! Connect with Us"
    )
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'Contact Nyxsys Philippines | Let’s Connect & Collaborate');
    this.utils.setMetaPropertyTag('og:description', 
      "Need digital advertising solutions? Contact Nyxsys Philippines for expert DOOH, LED, and business tech services. Let’s build something great! Connect with Us"
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/contact');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'Contact Nyxsys Philippines | Let’s Connect & Collaborate',)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      "Need digital advertising solutions? Contact Nyxsys Philippines for expert DOOH, LED, and business tech services. Let’s build something great! Connect with Us"
    )
  }

  async onClickSendEmail() {
    if (this.contactUs.invalid) return;
    this.isSending.set(true);
    this.recaptchaV3Service.execute('contactUs').subscribe((token) => {
      this.contactUs.patchValue({ recaptchaToken: token });      
      this.utils.onSendEmail(this.contactUs).subscribe({
        next: (result: any) => {
          console.log(result);
          this.contactUs.reset();
          this.utils.showSnackbar('Email sent successfully!');
          this.isSending.set(false);
          this.router.navigate(['/thank-you'])
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