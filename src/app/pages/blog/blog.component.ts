import { Component } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
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
export class BlogComponent {

  isVisible: boolean[] = [ false, false ];
  blogLists: any[] = [];  

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }
  
  ngOnInit(): void {
    const elements = document.querySelectorAll('.blog-item');      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    })   

    this.utils.setPageTitle('DOOH Insights, Trends & Strategies | NYXSYS Philippines, Inc.'); 
    this.utils.setMetaUpdateTag('title', 'DOOH Insights, Trends & Strategies | NYXSYS Philippines, Inc.',)

    this.utils.setMetaUpdateTag(
      'description',
      "Stay updated with the latest trends, strategies, and innovations in Digital Out-of-Home (DOOH) advertising. Explore expert insights and industry news with NYXSYS Philippines, Inc."
    )
    
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'DOOH Insights, Trends & Strategies | NYXSYS Philippines, Inc.');
    this.utils.setMetaPropertyTag('og:description', 
      "Stay updated with the latest trends, strategies, and innovations in Digital Out-of-Home (DOOH) advertising. Explore expert insights and industry news with NYXSYS Philippines, Inc."
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/blog');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'DOOH Insights, Trends & Strategies | NYXSYS Philippines, Inc.',)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      "Stay updated with the latest trends, strategies, and innovations in Digital Out-of-Home (DOOH) advertising. Explore expert insights and industry news with NYXSYS Philippines, Inc."
    )

    this.onGetBlogPosts();
  }

  onGetBlogPosts() {
    this.utils.getBlogPosts().subscribe({
      next: (result: any) => {
        result.forEach((data: any) => {
          const { _embedded, ...info } = data;          
          const media = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0]?.source_url : 'https://placehold.co/600x400';
          const author = _embedded['author'] ? _embedded['author'][0] : null;          
          this.blogLists.push({
            media, author, ...info,
          })
        });
      }
    })
  }
}
