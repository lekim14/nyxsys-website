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
    

    this.utils.setPageTitle('Customer Testimonials & Success Stories | NYXSYS Philippines, Inc.');
    
    this.utils.setMetaUpdateTag('title', 'Customer Testimonials & Success Stories | NYXSYS Philippines, Inc.');
    this.utils.setMetaUpdateTag(
      'description',
      "Real stories from satisfied customers who have experienced the power of our digital signage solutions."
    )
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'Customer Testimonials & Success Stories | NYXSYS Philippines, Inc.');
    this.utils.setMetaPropertyTag('og:description', 
      "Real stories from satisfied customers who have experienced the power of our digital signage solutions."
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/testimonials');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'Customer Testimonials & Success Stories | NYXSYS Philippines, Inc.')
    this.utils.setMetaUpdateTag(
      'twitter:description',
      "Real stories from satisfied customers who have experienced the power of our digital signage solutions."
    )

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
