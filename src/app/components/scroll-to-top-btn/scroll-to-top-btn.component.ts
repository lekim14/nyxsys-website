import { Component, ElementRef, HostListener, Input, signal } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-scroll-to-top-btn',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './scroll-to-top-btn.component.html',
  styleUrl: './scroll-to-top-btn.component.scss',
  animations: [
    trigger('fabAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('hidden => visible', [
        animate('300ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ScrollToTopBtnComponent {

  @Input() sectionName: string = '';
  
  showButton = signal<boolean>(false);
  private heroSection!: HTMLElement | null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.heroSection = document.querySelector(this.sectionName);    
  }
  
  @HostListener('window:scroll', [])
    onScroll() {
    if (!this.heroSection) return;

    const rect = this.heroSection.getBoundingClientRect();    
    this.showButton.set(rect.bottom <= 0)
  }

  onClickScrollToTop() {
    window.scrollTo({ top: 0, behavior:'smooth' });
  }
}
