import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';

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
  
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.services-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })

    this.title.setTitle('Our Services • NYXSYS Philippines, Inc.');

    this.meta.updateTag({
      name: 'title',
      content: 'Our Services • NYXSYS Philippines, Inc.'
    });

    this.meta.updateTag({
      name: 'description',
      content: 'we provide cutting-edge digital solutions that empower businesses to thrive. Our team of experts in various industries has helped us build successful businesses in the Philippines.'
    })

    this.meta.updateTag({
      name: 'keywords', 
      content: 'nyxsys, digital solutions, business solutions, marketing, advertising, innovation, outdoor media, client-centric approach, visionary leadership'
    });

    // Update OpenGraph Meta
    this.meta.updateTag({
      property: 'og:title',
      content: 'Our Services • NYXSYS Philippines, Inc.'
    })

    this.meta.updateTag({
      property: 'og:description',
      content: 'we provide cutting-edge digital solutions that empower businesses to thrive. Our team of experts in various industries has helped us build successful businesses in the Philippines.'
    })

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    })

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://nyxsys.ph/services'
    })

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://nyxsys.ph/assets/images/nyxsys-logo-loading.png'
    })


  }
}
