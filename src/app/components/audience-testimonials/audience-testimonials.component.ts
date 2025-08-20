import { Component, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, state, AnimationEvent } from '@angular/animations';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';

interface Testimonial {
  name: string,
  image: string;
  text: string;
}

@Component({
  selector: 'app-audience-testimonials',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './audience-testimonials.component.html',
  styleUrl: './audience-testimonials.component.scss',
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
export class AudienceTestimonialsComponent {

  @ViewChild(SlickCarouselComponent) slickModal!: SlickCarouselComponent;

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

  testimonials: Testimonial[] = [
    {
      name: 'New Balance',
      image: 'https://nyxsys.ph/assets/webp-images/testimonials/new balance.webp',
      text: `Calton Datx enables us to measure the impact of our billboard campaigns, providing valuable insights that help us assess the effectiveness of our investment.`,
    },
    {
      name: 'IPG Media Brands',
      image: 'https://nyxsys.ph/assets/webp-images/testimonials/ipg media brands.webp',
      text: `Calton Datx is important for us because when we recommend sites to clients, they often request additional data—especially traffic data—to  valuate if their investment is worthwhile. It helps us demonstrate the visibility of a site to the mass market by providing accurate and compelling numbers. What sets Calton Datx apart is its up-to-date data, unlike other sources that rely on MMDA figures, which are typically updated only once a year.`,
    },
    {
      name: 'Dentsu',
      image: 'https://nyxsys.ph/assets/webp-images/testimonials/dentsu.webp',
      text: `Significance for me is the Indoor Report, it's a niche set of data that helps us to understand the demographics more. I have not met any data providers as detailed as Calton Datx.`,
    },
    {
      name: 'Spark',
      image: 'https://nyxsys.ph/assets/webp-images/testimonials/spark.webp',
      text: `Calton DATx supports our campaigns by delivering the key metrics for outof-home advertising: traffic count and impressions, which are  rucial for measuring campaign effectiveness.`,
    },
    {
      name: 'UNILAB',
      image: 'https://nyxsys.ph/assets/webp-images/testimonials/unilab.webp',
      text: `Calton DATx helps in our post campaign report to gauge efficiency of the sites.`,
    },
    {
      name: 'The Huddle Room',
      image: 'https://nyxsys.ph/assets/webp-images/testimonials/the huddle room.webp',
      text: `Calton DATx is highly beneficial to outof-home advertising, providing detailed data and specific figures for targeted areas, helping us make more informed decisions.`,
    },
  ];
  
  currentState = 'hidden';
  text: string = this.testimonials[this.currentIndex].text;
  name: string = this.testimonials[this.currentIndex].name;
  image: string = this.testimonials[this.currentIndex].image;

  currentValue: Testimonial = this.testimonials[this.currentIndex];

  ngOnInit(): void { }
  
  onClickPrev() {
    this.slickModal.slickPrev();
  }

  onClickNext() {
    this.slickModal.slickNext();
  }

  onClickChangeTestimonials(direction: number) {
    const index: number = this.currentIndex + direction;
    const length: number = this.testimonials.length;
    this.currentIndex = (index + length) % length;
    this.currentState = 'hidden';
  }
  
  animationFinished(event: AnimationEvent) {    
    if (event.fromState === 'void' && event.toState === 'hidden') {
      this.currentState = 'visible';
    } else if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.text = this.testimonials[this.currentIndex].text;
      this.name = this.testimonials[this.currentIndex].name;
      this.image = this.testimonials[this.currentIndex].image;
      this.currentState = 'visible';
    }
  }
}
