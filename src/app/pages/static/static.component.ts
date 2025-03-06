import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';

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
      image: 'assets/images/static/edsa orense parallel.jpg'
    },
    { 
      text: 'EDSA ORENSE PARALLEL NORTHBOUND STATIC BILLBOARD',
      address: 'EDSA corner Orense St., Makati City',
      size: '',
      image: 'assets/images/static/edsa northbound static billboard.jpg'
    },
    { 
      text: 'EDSA MARCALEON (DOUBLE-FACED, SOUTHBOUND)',
      address: 'EDSA Mandaluyong - Marcaleon Site, next to Petron and Shell Gasoline stations, Mandaluyong City',
      size: '80FT (H) x 70FT (W)',
      image: 'assets/images/static/edsa marcaleon double-faced southbound.jpg'
    },
    { 
      text: 'EDSA MARCALEON (DOUBLE-FACED, NORTHBOUND)',
      address: 'EDSA Mandaluyong - Marcaleon Site, next to Petron and Shell Gasoline stations, Mandaluyong City',
      size: '80FT (H) x 70FT (W)',
      image: 'assets/images/static/edsa marcaleon double-faced northbound.jpg'
    },
  ]

  
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.static-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });

    this.title.setTitle('Static Fixed Inventories • NYXSYS Philippines, Inc.');
    this.meta.updateTag({ name: 'title', content: 'Static Fixed Inventories • NYXSYS Philippines, Inc.' });
    this.meta.updateTag({ name: 'description', content: 'a leading global technology solutions company specializing in IoT, smart cities, and advanced manufacturing solutions. We offer customizable billboards, digital signage, and software solutions to help businesses achieve their goals.' });
    this.meta.updateTag({ name: 'keywords', content: 'Nyxsys, IoT, smart cities, advanced manufacturing, customizable billboards, digital signage, software solutions' });


    // Update OpenGraph Meta
    this.meta.updateTag({ property: 'og:title', content: 'Static Fixed Inventories • NYXSYS Philippines, Inc.' });
    this.meta.updateTag({ property: 'og:description', content: 'a leading global technology solutions company specializing in IoT, smart cities, and advanced manufacturing solutions. We offer customizable billboards, digital signage, and software solutions to help businesses achieve their goals.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://nyxsys.ph/assets/images/nyxsys-logo-loading.png' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://nyxsys.ph/services/static-fixed-inventories' });
  }
}
