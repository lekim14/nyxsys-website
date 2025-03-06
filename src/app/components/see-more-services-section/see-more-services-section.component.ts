import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-see-more-services-section',
  standalone: true,
  imports: [MaterialUiModule, ComponentsModule],
  templateUrl: './see-more-services-section.component.html',
  styleUrl: './see-more-services-section.component.scss'
})
export class SeeMoreServicesSectionComponent implements OnInit {

  @ViewChild(SlickCarouselComponent) slickModal!: SlickCarouselComponent;

  services: any;

  config: any = {
    arrows: false,
    dots: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  constructor(private utility: UtilityService, private router: Router) { }

  ngOnInit(): void {
    this.onGetAllService();
  }

  onGetAllService() {
    const serviceLists: any[] = this.utility.services;
    this.services = serviceLists.filter(item => item.routerLink !== this.router.url);
  }

  onClickPrev() {
    this.slickModal.slickPrev();
  }

  onClickNext() {
    this.slickModal.slickNext();
  }
}
