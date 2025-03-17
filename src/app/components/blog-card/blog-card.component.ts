import { Component, Input } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {

  @Input() blog: any;
}
