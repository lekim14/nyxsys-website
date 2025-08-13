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
  script: any;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
        const isHome = event.urlAfterRedirects === '/' || event.url === '/';
        const isLED = event.urlAfterRedirects === '/services/led-media-inventories' || event.url === '/services/led-media-inventories';
        if(isHome){
          this.addScript();
        }else if(isLED){
          this.addLEDScript();
        }else{
          this.removeScript();
        }
      }
    });
    
    // const schema = {
    //   "@context": "https://schema.org",
    //   "@type": "Article",
    //   "headline": "Forefront Of Innovation For Digital Media And Industry Solutions",
    //   "description": "Transform business growth with Digital Out-of-Home (DOOH) media and innovative technology solutions.",
    //   "image": "https://nyxsys.ph/assets/images/nyxsys-logo-loading.png",
    //   "author": {
    //     "@type": "Person",
    //     "name": "NYXSYS Philippines, Inc."
    //   },
    //   "publisher": {
    //     "@type": "Organization",
    //     "name": "NYXSYS Philippines, Inc.",
    //     "logo": {
    //       "@type": "ImageObject",
    //       "url": "https://nyxsys.ph/assets/images/nyxsys-logo-loading.png"
    //     }
    //   },
    //   "datePublished": "2025-01-23",
    //   "dateModified": "2025-01-23",
    //   "mainEntityOfPage": {
    //     "@type": "WebPage",
    //     "@id": "http://nyxsys.ph"
    //   }
    // }
    
  }

  private addScript(){
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://nyxsys.ph/#website",
          "url": "https://nyxsys.ph",
          "name": "Nyxsys Philippines Inc.",
          "alternateName": "Nyxsys",
          "description": "Nyxsys Philippines Inc. is a leading digital advertising company in the Philippines, specializing in high-impact LED billboards, digital displays, and audience-focused media solutions for brands that want to stand out.",
          "publisher": {
            "@id": "https://nyxsys.ph/#organization"
          }
        },
        {
          "@type": "Organization",
          "@id": "https://nyxsys.ph/#organization",
          "name": "Nyxsys Philippines Inc.",
          "alternateName": "Nyxsys",
          "url": "https://nyxsys.ph",
          "logo": {
            "@type": "ImageObject",
            "url": "https://nyxsys.ph/assets/images/logo%20white.png"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "(02) 8687 0503 loc. 310",
            "contactType": "Customer Service"
          },
          "sameAs": [
            "https://www.facebook.com/NyxsysPh/",
            "https://www.instagram.com/nyxsysph/",
            "https://twitter.com/nyxsysph",
            "https://ph.linkedin.com/in/nyxsysph"
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://nyxsys.ph/#webpage",
          "url": "https://nyxsys.ph",
          "name": "Digital Out of Home & Billboard Advertising Philippines - Nyxsys Philippines Inc.",
          "isPartOf": {
            "@id": "https://nyxsys.ph/#website"
          },
          "about": {
            "@id": "https://nyxsys.ph/#organization"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://nyxsys.ph/assets/images/about.png"
          }
        }
      ]
    }
    this.script = this.renderer.createElement('script');
    this.script.type = 'application/ld+json';
    this.script.text = JSON.stringify(schema);
    this.renderer.appendChild(document.head, this.script);
  }

  private addLEDScript(){
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "LED Billboard Advertising",
      "serviceType": "LED Billboard Advertising",
      "url": "https://nyxsys.ph/services/led-media-inventories",
      "description": "High-impact LED billboard advertising in premium, high-traffic locations across Metro Manila.",
      "provider": {
        "@type": "Organization",
        "name": "Nyxsys",
        "url": "https://nyxsys.ph",
        "email": "inquire@nyxsys.ph",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "(02) 8687 0503 loc. 310",
          "contactType": "customer service",
          "areaServed": "PH",
          "availableLanguage": ["English", "Filipino"]
        }
      },
      "serviceArea": [
        {
          "@type": "Place",
          "name": "ICONIC - EDSA ORENSE LED (Southbound)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "447 Magsaysay Avenue, Guadalupe Nuevo",
            "addressLocality": "Makati City",
            "addressRegion": "Metro Manila",
            "addressCountry": "PH"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.56165993430734,
            "longitude": 121.04345272107649
          }
        },
        {
          "@type": "Place",
          "name": "EDSA PARAGON LED (Northbound)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Paragon Plaza Bldg, 162 EDSA corner Reliance St.",
            "addressLocality": "Mandaluyong City",
            "addressRegion": "Metro Manila",
            "addressCountry": "PH"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.57604418827174,
            "longitude": 121.05024570900122
          }
        },
        {
          "@type": "Place",
          "name": "C5 MARKET MARKET LED (Northbound)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Market Market, Taguig City",
            "addressLocality": "Taguig City",
            "addressRegion": "Metro Manila",
            "addressCountry": "PH"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.550340579192035,
            "longitude": 121.05763857712964
          }
        }
      ]
    }

    this.script = this.renderer.createElement('script');
    this.script.type = 'application/ld+json';
    this.script.text = JSON.stringify(schema);
    this.renderer.appendChild(document.head, this.script);
  }

  private removeScript(){
    try {
      this.renderer.removeChild(document, this.script)
    } catch (error) {
    }
  }
}
