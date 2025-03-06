import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  services: any[] = [
    {
      title: 'LED MEDIA INVENTORIES',
      description: 'High-performance LED displays delivering unmatched quality and versatility for all your marketing and advertising needs.',
      image: 'assets/images/led/led-services.png',
      routerLink: '/services/led-media-inventories'
    },
    {
      title: 'STATIC FIXED INVENTORIES',
      description: `Durable, high-quality static advertising solutions designed to deliver impactful, long-lasting brand messaging in high-traffic areas.`,
      image: 'assets/images/static/edsa northbound static billboard.jpg',
      routerLink: '/services/static-fixed-inventories'
    },
    {
      title: 'DIGITAL DISPLAY MANAGEMENT SERVICES',
      description: `Dynamic, high-definition displays designed for impactful advertising, real-time updates, and seamless engagement across diverse industries.`,
      image: 'assets/images/business solutions/globe.jpg',
      routerLink: '/services/digital-display-management-services'
    },
    {
      title: 'AUDIENCE MEASUREMENT',
      description: `An advanced data platform that transforms real-time monitoring into actionable insights, empowering businesses to optimize operations and drive growth.`,
      image: 'assets/images/audience measurement/indoor/indoor mall audience measurement 1.png',
      routerLink: '/services/audience-measurement'
    }
  ]

  constructor(private breakPointObserver: BreakpointObserver) { }

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
}
