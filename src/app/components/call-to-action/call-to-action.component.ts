import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [ MaterialUiModule, RouterLink ],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent {

}
