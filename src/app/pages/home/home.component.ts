import { ChangeDetectionStrategy, Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  showButton = signal<boolean>(false);
  isVideoLoading: boolean = true;
  @ViewChild('videoElement') videoElementRef!: ElementRef<HTMLVideoElement>;

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    this.utils.setPageTitle('Nyxsys Philippines Inc. | Official Site | DOOH Advertising')

    this.utils.setMetaUpdateTag('title', 'Nyxsys Philippines Inc. | Official Site | DOOH Advertising',)
    this.utils.setMetaUpdateTag(
      'description',
      'Nyxsys Philippines is a premier provider of Digital Out-of-Home (DOOH) media and business technology solutions. From LED billboards to audience measurement.'
    )

    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'Nyxsys Philippines Inc. | Official Site | DOOH Advertising');
    this.utils.setMetaPropertyTag('og:description', 
      'Nyxsys Philippines is a premier provider of Digital Out-of-Home (DOOH) media and business technology solutions. From LED billboards to audience measurement.'
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'Nyxsys Philippines Inc. | Official Site | DOOH Advertising',)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      'Nyxsys Philippines is a premier provider of Digital Out-of-Home (DOOH) media and business technology solutions. From LED billboards to audience measurement.'
    )
  }

  ngAfterViewInit() { 
    const video = this.videoElementRef.nativeElement;
    video.addEventListener('loadeddata', () => {
      console.log('Video loaded once');
      this.isVideoLoading = false;
      
    }, { once: true }); // Ensures it's only triggered once
  }

  onClickScrollSection() {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior:'smooth', block: 'start' });
  }

  onVideoLoaded(){
    this.isVideoLoading = false;
  }
}
