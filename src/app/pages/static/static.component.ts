import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-static',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule, RouterLink ],
  templateUrl: './static.component.html',
  styleUrl: './static.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class StaticComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];
  isVideoLoading: boolean = true;

  staticInvetories: any[] = [];

  whyChooseUs: any[] = [
    {
      title: 'High Visibility',
      text: 'Always on, reaching thousands of people in great areas.',
      icon: 'groups',
    },
    {
      title: 'Cost-effective',
      text: 'Fixed rental prices with no electricity expenditures.',
      icon: 'paid',
    },
    {
      title: 'Mass Market Reach',
      text: 'Concentrates on commuters, cars, and pedestrians.',
      icon: 'directions_run',
    },
    {
      title: 'Weatherproof and dependable',
      text: 'Exposed 24/7, unaffected by power disruptions.',
      icon: 'cloud',
    },
    {
      title: 'Builds Trust',
      text: 'Physical presence increases brand credibility.',
      icon: 'thumb_up',
    },
  ]

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    });
    this.staticInvetories = this.utils.staticInvetories;
  }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.static-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });

    this.utils.setPageTitle('Static Billboard Advertising | Long-Lasting Brand Visibility');

    this.utils.setMetaUpdateTag('title', 'Static Billboard Advertising | Long-Lasting Brand Visibility',);
    this.utils.setMetaUpdateTag(
      'description',
      "Nyxsys’ static billboards offer durable, high-impact ads in strategic locations like EDSA Marcaleon & EDSA Orense, ensuring strong, lasting brand visibility."
    )
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'Static Billboard Advertising | Long-Lasting Brand Visibility');
    this.utils.setMetaPropertyTag('og:description', 
      "Nyxsys’ static billboards offer durable, high-impact ads in strategic locations like EDSA Marcaleon & EDSA Orense, ensuring strong, lasting brand visibility."
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/services/static-fixed-inventories');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'Static Billboard Advertising | Long-Lasting Brand Visibility')
    this.utils.setMetaUpdateTag(
      'twitter:description',
      "Nyxsys’ static billboards offer durable, high-impact ads in strategic locations like EDSA Marcaleon & EDSA Orense, ensuring strong, lasting brand visibility."
    );
  }

  onVideoLoaded(){
    this.isVideoLoading = false;
  }
}
