import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.team-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })

    this.title.setTitle('Meet Our Team • NYXSYS Philippines, Inc.');

    this.meta.updateTag({
      name: 'title',
      content: 'Meet Our Team • NYXSYS Philippines, Inc.'
    });

    this.meta.updateTag({
      name: 'description',
      content: 'Meet our team behind NYXSYS Philippines, Inc., a leading innovator in the IoT and wearable technology space.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Nyxsys Philippines, Inc., team, digital media, IoT, wearable technology, outdoor advertising'
    });


    // Update OpenGraph Meta
    this.meta.updateTag({
      property: 'og:title',
      content: 'Meet Our Team • NYXSYS Philippines, Inc.'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Meet our team behind NYXSYS Philippines, Inc., a leading innovator in the IoT and wearable technology space.'
    });
  }
}
