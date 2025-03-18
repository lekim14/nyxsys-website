import { Component } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { UtilityService } from '../../services/utility.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {

  css_url: string = environment.css_url;

  blogDetails: any;
  previousBlogs: any[] = [];

  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  constructor(private utils: UtilityService, private activateRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
    
    this.activateRoute.paramMap.subscribe(params => {
      const slug: any = params.get('slug');
      utils.getBlogPostBySlug(slug).subscribe({
        next: (blogPost: any) => {
          const { _embedded, ...info } = blogPost[0];
          const media = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0]?.source_url : 'https://placehold.co/600x400';
          this.blogDetails = {  media, ...info };

          this.onGetPreviousBlogPosts(this.blogDetails.date);
          
          this.utils.setPageTitle(`${this.blogDetails?.title.rendered} | NYXSYS Philippines, Inc.`); 
          this.utils.setMetaUpdateTag('title', `${this.blogDetails?.title.rendered} | NYXSYS Philippines, Inc.`)

          this.utils.setMetaUpdateTag(
            'description',
            `${this.blogDetails?.title.rendered} | NYXSYS Philippines, Inc.`
          )
          
          // Apply WordPress Styles
          // this.loadWordPressStyles();
        },
        error: (error) => {
          console.error(error);
        }
      })
    });
  }

  ngOnInit(): void {
  }

  onGetPreviousBlogPosts(date: any) {
    this.utils.getPreviousBlogPosts(date).subscribe({
      next: (results: any) => {
        results.forEach((data: any) => {
          const { _embedded, ...info } = data;        
          const media = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0]?.source_url : 'https://placehold.co/600x400';
          this.previousBlogs.push({ media, ...info });
        });
      }
    })
  }

  loadWordPressStyles() {
    this.utils.getWPStyleSheet().subscribe({
      next: (styles: any) => {
        styles.forEach((style: any) => {
          const link = document.createElement('link');
          link.rel ='stylesheet';
          link.href = style.url;
          link.type = 'text/css';
          document.querySelector('.blog-content')?.appendChild(link);
        });
      },
      error: (error) => {
        console.error(error);
      }
    })
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.href = this.css_url;
    // link.type = 'text/css';
    // document.querySelector('.blog-content')?.appendChild(link);
  }
}
