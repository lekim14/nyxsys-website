import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ MaterialUiModule, RouterModule ],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      // transition('visible => hidden', animate('600ms ease-in')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {

  isVisible: boolean[] = [ false, false ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.about-content');      
    
    elements.forEach((element, index) => {  
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setTimeout(() => (this.isVisible[index] = true), index * 300); // 300ms delay for each div
      }
    })
  }
}
