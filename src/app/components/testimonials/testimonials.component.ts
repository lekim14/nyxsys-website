import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { UtilityService } from '../../services/utility.service';
import { TestimonialsCardComponent } from '../testimonials-card/testimonials-card.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ MaterialUiModule, TestimonialsCardComponent ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {

  testimonials: any[] = [];

  constructor(private utils: UtilityService) { }

  ngOnInit() {
    this.onLoadTestimonials();
  }

  onLoadTestimonials() {
    this.utils.getTestimonials().subscribe({
      next: (testimonials: any) => {
        this.testimonials = testimonials.splice(0, 3);
      },
      error: (error) => {
        console.error('Error fetching testimonials:', error);
      }
    })
  }
}
