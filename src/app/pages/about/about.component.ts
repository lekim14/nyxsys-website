import { Component, HostListener, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
    trigger('slideInLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
    trigger('slideInRight', [
      state('hidden', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ])
  ],
})
export class AboutComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];

  isVisibleHistroy: boolean = false;
  isVisibleMission: boolean = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight; 
    const history: any = document.querySelector('.history-container');
    const mission: any = document.querySelector('.mission-container');
 
    const historyRect = history.getBoundingClientRect();
    const missionRect = mission.getBoundingClientRect();

    if (historyRect.top <= windowHeight && historyRect.bottom >= 0) {
      setTimeout(() => this.isVisibleHistroy = true, 200);
    }  
    
    if (missionRect.top <= windowHeight && missionRect.bottom >= 0) {
      setTimeout(() => this.isVisibleMission = true, 200);
    }  
  }

  constructor(private meta: Meta, private title: Title) { }
  
  ngOnInit(): void {
    const elements = document.querySelectorAll('.about-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })
    
    this.title.setTitle('Who We Are • NYXSYS Philippines, Inc.');

    this.meta.updateTag({
      name: 'title',
      content: 'Who We Are • NYXSYS Philippines, Inc.'
    });

    this.meta.updateTag({
      name: 'description',
      content: 'a leading technology company specializing in the development and implementation of advanced IoT solutions.'
    })

    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'nyxsys, Philippines, IoT, technology, development, implementation' 
    });


    // Update OpenGraph Meta
    this.meta.updateTag({
      property: 'og:title',
      content: 'Who We Are • NYXSYS Philippines, Inc.'
    });
    
    this.meta.updateTag({
      property: 'og:description',
      content: 'a leading technology company specializing in the development and implementation of advanced IoT solutions.'
    });
    
    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
    
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://nyxsys.ph/assets/images/nyxsys-logo-loading.png'
    });
    
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://nyxsys.com/about'
    });
  }
}
