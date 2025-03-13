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

  teams: any[] = [
    {
      id: 1,
      path: 'assets/images/team/1.jpg',
      alt: 'Nyxsys Team in a conference room displaying the mantra "Breaking Barriers, Exceeding Limits"'
    },
    {
      id: 2,
      path: 'assets/images/team/2.jpg',
      alt: 'Nyxsys team posing in a cozy, modern office lounge.'
    },
    {
      id: 3,
      path: 'assets/images/team/3.jpg',
      alt: 'Nyxsys team wearing matching shirts, posing together at a company event.'
    },
    {
      id: 4,
      path: 'assets/images/team/4.jpg',
      alt: 'Nyxsys team dressed in formal attirewith a futuristic LED backdrop.'
    },
    {
      id: 5,
      path: 'assets/images/team/5.jpg',
      alt: 'Nyxsys team at a festive Christmas celebration.'
    },
    {
      id: 6,
      path: 'assets/images/team/6.jpg',
      alt: 'Nyxsys team enjoying a traditional boodle fight feast.'
    },
  ]

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
