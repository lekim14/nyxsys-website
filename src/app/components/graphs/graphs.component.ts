import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { trigger, transition, style, animate, state, AnimationEvent } from '@angular/animations';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [MaterialUiModule],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.scss',
  animations: [
    trigger('animateText', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('500ms ease')
      ])
    ]),
    trigger('animateImage', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-100%)' // Slide out to the left
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)' // Slide into position
      })),
      transition('hidden <=> visible', [
        animate('500ms ease-in-out') // Adjust duration as needed
      ])
    ])
  ],
})
export class GraphsComponent implements OnInit {

  @ViewChild(SlickCarouselComponent) slickModal!: SlickCarouselComponent;

  @Input() carouselItemList!: any[];

  currentIndex: number = 0;
  config: any = {
    autoPlay: true,
    arrows: false,
    dots: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  currentState = 'hidden';
  text: string = '';
  name: string = '';
  image: string = '';

  currentValue: any;

  ngOnInit(): void {
    this.text = this.carouselItemList[this.currentIndex].text;
    this.name = this.carouselItemList[this.currentIndex].name;
    this.image = this.carouselItemList[this.currentIndex].image;

    this.currentValue = this.carouselItemList[this.currentIndex];
  }

  onClickPrev() {
    this.slickModal.slickPrev();
  }

  onClickNext() {
    this.slickModal.slickNext();
  }

  onClickChangeCarouselItemList(direction: number) {
    const index: number = this.currentIndex + direction;
    const length: number = this.carouselItemList.length;
    this.currentIndex = (index + length) % length;
    this.currentState = 'hidden';
  }

  animationFinished(event: AnimationEvent) {
    if (event.fromState === 'void' && event.toState === 'hidden') {
      this.currentState = 'visible';
    } else if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.text = this.carouselItemList[this.currentIndex].text;
      this.name = this.carouselItemList[this.currentIndex].name;
      this.image = this.carouselItemList[this.currentIndex].image;
      this.currentState = 'visible';
    }
  }
}
