import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-counting',
  standalone: true,
  imports: [],
  templateUrl: './number-counting.component.html',
  styleUrl: './number-counting.component.scss'
})
export class NumberCountingComponent implements OnInit, OnDestroy {

  @Input() finalValue: number = 0;
  @Input() subText: string = '%';
  @Input() title: string = 'Percent'
  @Input() duration = 1000; // Duration of the animation in ms

  private observer!: IntersectionObserver;
  displayNumber: number = 0;
  interval: any;
  constructor(private el: ElementRef) {}

  ngOnInit(): void { 
    // Set up IntersectionObserver to watch when component is in view
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animateCounter();
          this.observer.disconnect(); // Stop observing after the first trigger
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  animateCounter() {
    const startValue = Math.floor(Math.random() * 90 + 10);
    const frameRate = 30;
    const increment = (this.finalValue - startValue) / (this.duration / frameRate);

    let currentValue = startValue;
    this.displayNumber = currentValue;

    this.interval = setInterval(() => {
      currentValue += increment;
      
      if ((increment > 0 && currentValue >= this.finalValue) || 
          (increment < 0 && currentValue <= this.finalValue)) {
        currentValue = this.finalValue;
        clearInterval(this.interval);
      }

      this.displayNumber = Math.round(currentValue);
    }, frameRate);
  }
}
