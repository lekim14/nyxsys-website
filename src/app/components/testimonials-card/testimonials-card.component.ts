import { Component, Input } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';

@Component({
  selector: 'app-testimonials-card',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './testimonials-card.component.html',
  styleUrl: './testimonials-card.component.scss'
})
export class TestimonialsCardComponent {

  @Input() item: any;
  
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

  getInitials(name: string): string {    
    return name.split(' ').map(word => word.charAt(0)).join('');
  }
}
