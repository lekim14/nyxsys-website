import { Component } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blogLists: any[] = [
    {
      "id": 1,
      "title": "The Future of DOOH: Emerging Trends in 2025",
      "slug": "future-of-dooh-2025",
      "excerpt": "Discover the latest advancements in Digital Out-of-Home advertising and what to expect in 2025.",
      "image": "future-of-dooh-2025.jpg",
      "publishedDate": "2025-03-12"
    },
    {
      "id": 2,
      "title": "Maximizing Brand Engagement with DOOH Campaigns",
      "slug": "maximizing-brand-engagement-dooh",
      "excerpt": "Learn how to create high-impact DOOH campaigns that drive brand awareness and engagement.",
      "image": "brand-engagement-dooh.jpg",
      "publishedDate": "2025-03-05"
    },
    {
      "id": 3,
      "title": "How AI is Revolutionizing Digital Signage",
      "slug": "ai-revolution-digital-signage",
      "excerpt": "Explore the role of artificial intelligence in enhancing DOOH advertising and customer interactions.",
      "image": "ai-digital-signage.jpg",
      "publishedDate": "2025-02-28"
    },
    {
      "id": 4,
      "title": "The Power of Programmatic Advertising in DOOH",
      "slug": "programmatic-advertising-dooh",
      "excerpt": "Understand how programmatic advertising is transforming the way brands buy and optimize DOOH ads.",
      "image": "programmatic-dooh.jpg",
      "publishedDate": "2025-02-20"
    },
    {
      "id": 5,
      "title": "DOOH vs. Traditional OOH: Which is Right for Your Brand?",
      "slug": "dooh-vs-traditional-ooh",
      "excerpt": "Compare Digital Out-of-Home advertising with traditional billboards to find the best fit for your brand.",
      "image": "dooh-vs-traditional.jpg",
      "publishedDate": "2025-02-10"
    },
    {
      "id": 6,
      "title": "Best Practices for Designing Eye-Catching DOOH Content",
      "slug": "best-practices-dooh-content",
      "excerpt": "Discover design tips and creative strategies to make your DOOH content stand out.",
      "image": "dooh-content-design.jpg",
      "publishedDate": "2025-01-30"
    }
  ];  

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }
  
  ngOnInit(): void {

    this.utils.setPageTitle('DOOH Insights, Trends & Strategies | NYXSYS Philippines, Inc.'); 
    this.utils.setMetaUpdateTag('title', 'DOOH Insights, Trends & Strategies | NYXSYS Philippines, Inc.',)

    this.utils.setMetaUpdateTag(
      'description',
      "tay updated with the latest trends, strategies, and innovations in Digital Out-of-Home (DOOH) advertising. Explore expert insights and industry news with NYXSYS Philippines, Inc."
    )
  }
}
