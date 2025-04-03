import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-static',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
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

  staticInvetories: any[] = [
    { 
      text: 'EDSA NORTHBOUND STATIC BILLBOARD',
      address: 'EDSA corner Orense St. Makati City',
      size: '90ft (H) x 70ft (W)',
      image: 'assets/images/static/edsa northbound static billboard.jpg',
      alt: 'Static Parallel Billboard located at Edsa Northbound',
    },
    { 
      text: 'EDSA ORENSE PARALLEL NORTHBOUND STATIC BILLBOARD',
      address: 'EDSA corner Orense St., Makati City',
      size: '',
      image: 'assets/images/static/edsa orense parallel.jpg',
      alt: 'Static Billboard located at Edsa Northbound',
    },
    { 
      text: 'EDSA MARCALEON (DOUBLE-FACED, SOUTHBOUND)',
      address: 'EDSA Mandaluyong - Marcaleon Site, next to Petron and Shell Gasoline stations, Mandaluyong City',
      size: '80FT (H) x 70FT (W)',
      image: 'assets/images/static/edsa marcaleon double-faced southbound.jpg',
      alt: 'Static Billboard located at Edsa Marcaleon Southbound',
    },
    { 
      text: 'EDSA MARCALEON (DOUBLE-FACED, NORTHBOUND)',
      address: 'EDSA Mandaluyong - Marcaleon Site, next to Petron and Shell Gasoline stations, Mandaluyong City',
      size: '80FT (H) x 70FT (W)',
      image: 'assets/images/static/edsa marcaleon double-faced northbound.jpg',
      alt: 'Static Billboard located at Edsa Marcaleon Northbound',
    },
  ]

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
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
    )
  }
}
