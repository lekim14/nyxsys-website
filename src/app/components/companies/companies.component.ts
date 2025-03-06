import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [ MaterialUiModule ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {

  imageIndex: any[] = Array.from({ length: 49 }, ( _, index) => ({ id: index + 1 }));

}
