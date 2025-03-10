import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  services: any[] = [
    {
      title: 'LED MEDIA INVENTORIES',
      description: 'High-performance LED displays delivering unmatched quality and versatility for all your marketing and advertising needs.',
      image: 'assets/images/led/led-services.png',
      routerLink: '/services/led-media-inventories',
      buttonText: 'Explore Our LED Media Inventory Solutions'
    },
    {
      title: 'STATIC FIXED INVENTORIES',
      description: `Durable, high-quality static advertising solutions designed to deliver impactful, long-lasting brand messaging in high-traffic areas.`,
      image: 'assets/images/static/edsa northbound static billboard.jpg',
      routerLink: '/services/static-fixed-inventories',
      buttonText: 'See Our Display Management Services'
    },
    {
      title: 'DIGITAL DISPLAY MANAGEMENT SERVICES',
      description: `Dynamic, high-definition displays designed for impactful advertising, real-time updates, and seamless engagement across diverse industries.`,
      image: 'assets/images/business solutions/globe.jpg',
      routerLink: '/services/digital-display-management-services',
      buttonText: 'Learn How We Manage Digital Displays'
    },
    {
      title: 'AUDIENCE MEASUREMENT',
      description: `An advanced data platform that transforms real-time monitoring into actionable insights, empowering businesses to optimize operations and drive growth.`,
      image: 'assets/images/audience measurement/indoor/indoor mall audience measurement 1.png',
      routerLink: '/services/audience-measurement',
      buttonText: 'Discover How We Measure Advertising Impact'
    }
  ]

  constructor(
    private breakPointObserver: BreakpointObserver,
    private meta: Meta,
    private title: Title,
    private router: Router
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

  setMetaUpdateTag(name: string, content: string) {
    if (this.meta.getTag(`name='${name}'`)) {
      this.meta.updateTag({ name, content });
    } else {
      this.meta.addTag({ name, content });
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
  

  async onSendEmail(contactForm: FormGroup) {
    const emailAddress: string = 'inquire@nyxsys.ph';
    const { name, company, email, contact, message }: any = contactForm.value;
    
    const mailToLink = `mailto:${emailAddress}?subject=Inquiry: Digital Out-of-Home Advertising Solutions&body=${encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`)}`;
    window.open(mailToLink, '_blank');
    contactForm.reset();
  }
}
