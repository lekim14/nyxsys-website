import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-driving-force-section',
  standalone: true,
  imports: [],
  templateUrl: './driving-force-section.component.html',
  styleUrl: './driving-force-section.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      // transition('visible => hidden', animate('600ms ease-in')),
    ]),
  ],
})
export class DrivingForceSectionComponent {

  isVisible: boolean[] = [ false, false, false ];

  drivingForce: any[] = [
    { 
      title: 'INNOVATION', 
      details: 'Pioneering cutting-edge technology in digital media, such as iconic LED billboards and advanced advertising solutions, making Nyxsys a leader in outdoor media.' ,
      image: 'assets/images/innovation.jpg'
    },
    { 
      title: 'CLIENT-CENTRIC APPROACH', 
      details: `Focusing on delivering tailored solutions that meet the dynamic needs of advertisers and businesses.`, 
      image: 'assets/images/client.jpg'
    },
    { 
      title: 'VISIONARY LEADERSHIP', 
      details: `Empowered by strong leadership that inspires growth, collaboration, and service excellence, driving both innovation and company culture forward.` ,
      image: 'assets/images/visionary.jpg'
    },
  ]


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.feature-content');      
    
    elements.forEach((element, index) => {  
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setTimeout(() => (this.isVisible[index] = true), index * 300); // 300ms delay for each div
      }
    })
  }
}
