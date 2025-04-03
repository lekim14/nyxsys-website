import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [MaterialUiModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      // transition('visible => hidden', animate('600ms ease-in')),
    ]),
  ],
  providers: [UtilityService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {

  utility = inject(UtilityService);
  isVisible: boolean[] = [false, false, false, false];

  services: any[] = this.utility.services;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.service-item');

    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setTimeout(() => (this.isVisible[index] = true), index * 200); // 300ms delay for each div
      }
    })
  }
  
  trackByFn(index: number, item: any) {
    return item.id; // Unique identifier
  }
}
