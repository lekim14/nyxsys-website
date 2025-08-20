import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DomSanitizer, Meta, SafeResourceUrl, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  
  url: string = environment.wp;
  custom_url: string = environment.custom_url;
  css_url: string = environment.css_url;
  api: string = environment.api;

  services: any[] = [
    {
      id: 0,
      title: 'LED MEDIA INVENTORIES',
      description: 'High-performance LED displays delivering unmatched quality and versatility for all your marketing and advertising needs.',
      image: 'https://nyxsys.ph/assets/webp-images/led/led-services.webp',
      routerLink: '/services/led-media-inventories',
      buttonText: 'Explore Our LED Media Inventory Solutions',
      alt: 'Largest LED billboard along EDSA highway.'
    },
    {
      id: 1,
      title: 'STATIC FIXED INVENTORIES',
      description: `Durable, high-quality static advertising solutions designed to deliver impactful, long-lasting brand messaging in high-traffic areas.`,
      image: 'https://nyxsys.ph/assets/webp-images/static/edsa northbound static billboard.webp',
      routerLink: '/services/static-fixed-inventories',
      buttonText: 'See Our Static Billboard Advertising',
      alt: 'EDSA northbound static billboard over busy traffic.'
    },
    {
      id: 2,
      title: 'DIGITAL DISPLAY MANAGEMENT SERVICES',
      description: `Dynamic, high-definition displays designed for impactful advertising, real-time updates, and seamless engagement across diverse industries.`,
      image: 'https://nyxsys.ph/assets/webp-images/business solutions/globe.webp',
      routerLink: '/services/digital-display-management-services',
      buttonText: 'Learn How We Manage Digital Displays',
      alt: 'LED display screens at Globe store showcase vibrant visuals.'
    },
    {
      id: 3,
      title: 'AUDIENCE MEASUREMENT',
      description: `An advanced data platform that transforms real-time monitoring into actionable insights, empowering businesses to optimize operations and drive growth.`,
      image: 'https://nyxsys.ph/assets/webp-images/audience measurement/indoor/indoor mall audience measurement 1.webp',
      routerLink: '/services/audience-measurement',
      buttonText: 'Discover How We Measure Advertising Impact',
      alt: 'People exiting a building with audience measurement overlays.'
    }
  ]

  constructor(
    private breakPointObserver: BreakpointObserver,
    private meta: Meta,
    private title: Title,
    private router: Router,
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) { }

  isMobile(destroyed: Subject<void>): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.breakPointObserver
        .observe([Breakpoints.XSmall, Breakpoints.Small])
        .pipe(takeUntil(destroyed))
        .subscribe((result) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              observer.next(true);
              return;
            }
          }
          observer.next(false);
        });
    });
  }

  setPageTitle(value: string) {
    this.title.setTitle(value);
  }
  
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  setMetaUpdateTag(name: string, content: string) {
    if (this.meta.getTag(`name='${name}'`)) {
      this.meta.updateTag({ name, content });
    } else {
      this.meta.addTag({ name, content });
    }
  }

  setMetaPropertyTag(property: string, content: string) {
    if (this.meta.getTag(`property='${property}'`)) {
      this.meta.updateTag({ property, content });
    } else {
      this.meta.addTag({ property, content });
    }
  }

  setCanonicalURL(url?: string) {
    let link: HTMLLinkElement = document.querySelector("link[rel='canonical']") || document.createElement("link");
    link.setAttribute("rel", "canonical");

    const canonicalUrl = url ? url : `${window.location.origin}${this.router.url}`;
    link.setAttribute("href", canonicalUrl);

    if (!document.querySelector("link[rel='canonical']")) {
      document.head.appendChild(link);
    }
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior:'smooth', block: 'start' });
    }
  }
  

  onSendEmail(contactForm: FormGroup) {
    const body = contactForm.value;
    // const emailAddress: string = 'inquire@nyxsys.ph';
    // const { name, company, email, contact, message }: any = contactForm.value;
    
    // const mailToLink = `mailto:${emailAddress}?subject=Inquiry: Digital Out-of-Home Advertising Solutions&body=${encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`)}`;
    // window.open(mailToLink, '_blank');
    return this.http.post(`${this.api}/company-website/inquiry-send-email`, body)
  }

  showSnackbar(message: string) {
    this.snackbar.open(message, 'Close', { duration: 3000 });
  }

  getWPStyleSheet() {
    return this.http.get(`${this.css_url}`, { responseType: 'text' });
  }

  getBlogPosts() {
    return this.http.get(`${this.url}posts?_embed=author,wp:featuredmedia`)
  }

  getBlogPostBySlug(slug: string) {
    return this.http.get(`${this.url}posts?slug=${slug}&_embed=author,wp:featuredmedia`)
  }

  getPreviousBlogPosts(date: any, page: number = 3) {
    return this.http.get(`${this.url}posts?before=${date}&_embed=author,wp:featuredmedia&per_page=${page}`)
  }

  getTestimonials() {
    return this.http.get(`${this.custom_url}testimonials`);
  }
}
