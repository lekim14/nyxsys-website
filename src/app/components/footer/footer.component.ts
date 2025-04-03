import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ MaterialUiModule, RouterModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  emailAddress: string = 'inquire@nyxsys.ph';
  address: string = 'G/F Paragon Plaza Bldg., 162 EDSA cor. Reliance St., Mandaluyong City, PH';
  phone: string = '(02) 8687 0503 loc. 310';

  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/NyxsysPh/', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/nyxsysph/', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com/nyxsysph', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://ph.linkedin.com/in/nyxsysph', icon: 'linkedin' },
  ];
}
