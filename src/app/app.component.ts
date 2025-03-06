import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit { 
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Forefront Of Innovation For Digital Media And Industry Solutions",
      "description": "Transform business growth with Digital Out-of-Home (DOOH) media and innovative technology solutions.",
      "image": "https://nyxsys.ph/assets/images/nyxsys-logo-loading.png",
      "author": {
        "@type": "Person",
        "name": "NYXSYS Philippines, Inc."
      },
      "publisher": {
        "@type": "Organization",
        "name": "NYXSYS Philippines, Inc.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nyxsys.ph/assets/images/nyxsys-logo-loading.png"
        }
      },
      "datePublished": "2025-01-23",
      "dateModified": "2025-01-23",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "http://nyxsys.ph"
      }
    }

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.renderer.appendChild(document.head, script);
  }
}
