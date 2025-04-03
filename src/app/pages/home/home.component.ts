import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  showButton = signal<boolean>(false);

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    this.utils.setPageTitle('Digital Out of Home Advertising Philippines | NYXSYS PH')

    this.utils.setMetaUpdateTag('title', 'Digital Out of Home Advertising Philippines | NYXSYS PH',)
    this.utils.setMetaUpdateTag(
      'description',
      'Nyxsys Philippines is a premier provider of Digital Out-of-Home (DOOH) media and business technology solutions. From LED billboards to audience measurement.'
    )

    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'Digital Out-of-Home Advertising Philippines | NYXSYS PH');
    this.utils.setMetaPropertyTag('og:description', 
      'Nyxsys Philippines is a premier provider of Digital Out-of-Home (DOOH) media and business technology solutions. From LED billboards to audience measurement.'
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'Digital Out of Home Advertising Philippines | NYXSYS PH',)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      'Nyxsys Philippines is a premier provider of Digital Out-of-Home (DOOH) media and business technology solutions. From LED billboards to audience measurement.'
    )
  }

  ngAfterViewInit() { }

  onClickScrollSection() {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior:'smooth', block: 'start' });
  }
}
