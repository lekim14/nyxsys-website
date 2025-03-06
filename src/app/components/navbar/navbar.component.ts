import { Component, HostListener, OnDestroy } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { Subject } from 'rxjs';
import { UtilityService } from '../../services/utility.service';
import { Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ MaterialUiModule, RouterModule, NgOptimizedImage  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;
  
  destroyed = new Subject<void>();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const heroSection = document.querySelector('.hero-section')?.clientHeight || 0;
    this.isScrolled = window.scrollY > heroSection;
  }

  constructor(public utility: UtilityService, public router: Router) {
    utility.isMobile(this.destroyed).subscribe({ next: (value: boolean) => {
      this.isMenuOpen = false;
    }})
  }
  
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
