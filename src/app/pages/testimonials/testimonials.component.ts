import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
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
export class TestimonialsComponent {

  testimonialList: any[] = [];

  
  // {
  //   "id": 1,
  //   "name": "John Dela Cruz",
  //   "company": "ABC Retail Solutions",
  //   "testimonial": "NYXSYS transformed our retail advertising with their DOOH solutions. Our engagement rates skyrocketed!",
  //   "image": "john-dela-cruz.jpg",
  //   "rating": 5
  // },
  // {
  //   "id": 2,
  //   "name": "Maria Santos",
  //   "company": "Santos Marketing Agency",
  //   "testimonial": "Seamless integration and outstanding customer support. Highly recommended for digital signage needs!",
  //   "image": "maria-santos.jpg",
  //   "rating": 5
  // },
  // {
  //   "id": 3,
  //   "name": "David Lee",
  //   "company": "Lee Tech Innovations",
  //   "testimonial": "The AI-powered DOOH features have taken our brand visibility to the next level!",
  //   "image": "david-lee.jpg",
  //   "rating": 4.5
  // },
  // {
  //   "id": 4,
  //   "name": "Sophia Reyes",
  //   "company": "Reyes Events Management",
  //   "testimonial": "NYXSYS helped us create dynamic event displays that captured audience attention instantly.",
  //   "image": "sophia-reyes.jpg",
  //   "rating": 5
  // },
  // {
  //   "id": 5,
  //   "name": "Michael Tan",
  //   "company": "Tan Supermalls",
  //   "testimonial": "Our mall’s digital screens are now more engaging and effective, thanks to NYXSYS.",
  //   "image": "michael-tan.jpg",
  //   "rating": 4.8
  // },
  // {
  //   "id": 6,
  //   "name": "Angela Lim",
  //   "company": "Lim Advertising Group",
  //   "testimonial": "Exceptional technology and service! Our digital campaigns have never looked better.",
  //   "image": "angela-lim.jpg",
  //   "rating": 5
  // }

  isVisible: boolean[] = [ false, false ];
  
  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }
  
  ngOnInit(): void {
    const elements = document.querySelectorAll('.testimonials-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });

    this.onLoadTestimonials();
  }
  
  onSetRatings(stars: number) {
    const fullStars = Math.floor(stars); // Get full stars
    const hasHalfStar = stars % 1 !== 0; // Check if there’s a half star
    const maxStars = 5; // Maximum number of stars
    const starArray = Array(fullStars).fill('star'); // Full stars
  
    if (hasHalfStar && starArray.length < maxStars) {
      starArray.push('star_half'); // Add half star
    }
  
    // Fill remaining stars with 'star_border' (empty star)
    while (starArray.length < maxStars) {
      starArray.push('star_border');
    }
  
    return starArray;
  }
  

  onLoadTestimonials() {
    this.utils.getTestimonials().subscribe({
      next: (testimonials: any) => {
        this.testimonialList = testimonials;        
      },
      error: (error) => {
        console.error('Error fetching testimonials:', error);
      }
    })
  }
}
