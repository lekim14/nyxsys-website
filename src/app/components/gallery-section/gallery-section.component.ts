import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class GallerySectionComponent {

  isVisible: boolean[] = [ false, false, false, false, false, false ];
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.gallery-item');      
    
    elements.forEach((element, index) => {  
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setTimeout(() => (this.isVisible[index] = true), index * 200); 
      }
    })
  }
}
