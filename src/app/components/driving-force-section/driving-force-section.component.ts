import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';

@Component({
  selector: 'app-driving-force-section',
  standalone: true,
  imports: [ MaterialUiModule ],
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrivingForceSectionComponent {

  isVisible: boolean[] = [ false, false, false ];

  drivingForce: any[] = [
    { 
      title: 'INNOVATION', 
      details: 'We lead with advanced digital signage solutions, bringing to the market technology like LED billboards and smart advertising tools.' ,
      image: 'https://nyxsys.ph/assets/webp-images/innovation.webp',
      alt: 'Businessman holds glowing bulb with tech icons.'
    },
    { 
      title: 'CLIENT-CENTRIC APPROACH', 
      details: `Our digital signage solutions are designed around the needs of marketers and advertisers, adapting to market trends and goals.`, 
      image: 'https://nyxsys.ph/assets/webp-images/client.webp',
      alt: 'Businessman using mouse with digital client network icons.'
    },
    { 
      title: 'VISIONARY LEADERSHIP', 
      details: `Strong leadership inspires the work we do at Nyxsys. Growth, teamwork and excellence at every level guides our digital signage solutions.` ,
      image: 'https://nyxsys.ph/assets/webp-images/visionary.webp',
      alt: 'Businessman holding digital human network hologram.'
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

  trackByFn(index: number, item: any) {
    return item.id; // Unique identifier
  }
}
