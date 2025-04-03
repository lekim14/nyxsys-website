import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ]
})
export class ServicesComponent implements OnInit {

  isVisible: boolean[] = [ false, false ]; 
  
  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.services-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })

    this.utils.setPageTitle('Our Services | Nyxsys Philippines - Digital Advertising Experts')

    this.utils.setMetaUpdateTag('title', 'Our Services | Nyxsys Philippines - Digital Advertising Experts',);
    this.utils.setMetaUpdateTag(
      'description',
      "Explore Nyxsys Philippines' DOOH services, LED billboards, audience insights, and digital display management. Drive impact with cutting-edge solutions."
    )
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'Our Services | Nyxsys Philippines - Digital Advertising Experts');
    this.utils.setMetaPropertyTag('og:description', 
      "Explore Nyxsys Philippines' DOOH services, LED billboards, audience insights, and digital display management. Drive impact with cutting-edge solutions."
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/services');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'Our Services | Nyxsys Philippines - Digital Advertising Experts',)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      "Explore Nyxsys Philippines' DOOH services, LED billboards, audience insights, and digital display management. Drive impact with cutting-edge solutions."
    )
  }
}
