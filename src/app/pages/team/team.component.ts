import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ]
})
export class TeamComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.team-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })

    this.utils.setPageTitle('Meet the Nyxsys Team | Innovators in Digital Advertising');
    
    this.utils.setMetaUpdateTag(
      'title',
      'Meet the Nyxsys Team | Innovators in Digital Advertising',
    )

    this.utils.setMetaUpdateTag(
      'description',
      "Meet the experts at Nyxsys Philippines! Our team drives innovation in DOOH, LED advertising, and digital solutions for impactful brand experiences. Read More."
    )
  }
}
