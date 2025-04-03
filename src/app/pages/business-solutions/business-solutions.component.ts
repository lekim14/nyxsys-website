import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Meta, Title } from '@angular/platform-browser';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-business-solutions',
  standalone: true,
  imports: [MaterialUiModule, ComponentsModule],
  templateUrl: './business-solutions.component.html',
  styleUrl: './business-solutions.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class BusinessSolutionsComponent implements OnInit {

  @ViewChild(SlickCarouselComponent) slickModalCaseStudies!: SlickCarouselComponent;

  isVcastPlaying: boolean = false;
  isVisible: boolean[] = [false, false];

  caseStudies: any[] = [
    {
      text: 'Globe Telecom',
      details: `Nyxsys Philippines provided Globe with a complete digital
        signage solution, from installing high-definition screens
        to seamless software integration and content
        management. Globe’s branches and public spaces were
        transformed with dynamic displays, delivering real-time
        information and interactive experiences, powered by
        Nyxsys' advanced technology.`,
      image: 'assets/images/business solutions/case studies/globe.jpg',
      alt: 'A Globe store with a bright LED display.',
    },
    {
      text: 'Dunkin Menu Boards',
      details: `Nyxsys Philippines facilitated the supply and delivery of
        Vcastplay for Dunkin', enhancing their in-store digital
        signage system. With Vcastplay, Dunkin' can now
        seamlessly manage and update content across
        multiple screens, ensuring vibrant and engaging
        displays for customers. This solution has streamlined
        Dunkin’s digital content delivery, reinforcing their brand
        presence while enhancing the customer experience.`,
      image: 'assets/images/business solutions/case studies/dunkin.jpg',
      alt: "A Dunkin' store with bright digital menu boards above shelves of pastries.",
    },
  ];

  e2eSolutions: any[] = [
    {
      text: 'Versatile Digital Signage System',
      details: 'With vcastplay, business owners can creatively display multimedia content like images, videos and websites dynamic marketing',
      image: 'assets/icons/versatile.png'
    },
    {
      text: 'Content Management Made Efficient',
      details: 'Vcastplay lets business owners create ad template, schedule airing and customize digital singnage to fit their business needs.',
      image: 'assets/icons/cms.png'
    },
    {
      text: 'Accessible Easy To Access',
      details: 'Vcastplay is a cloud-based digital signage system that lets business owners manage multiple players remotely with internet access, anytime, anywhere',
      image: 'assets/icons/access.png'
    },
    {
      text: 'Support Customer Service',
      details: 'Customer satisfaction is our priority. Our expert technical team is always available to assist with any digital signage issues',
      image: 'assets/icons/support.png'
    },
    {
      text: 'Timely Reports',
      details: 'Vcastplay offers real-time tracking and monitoring reports to ensure your digital signage is running smoothly.',
      image: 'assets/icons/timely.png'
    },
  ];

  postServices: any[] = [
    {
      text: 'Software Subscription of vcastplay',
      details: `vcastplay offers flexible subscription options, including a Free Trial for 15 days with 5GB cloud storage, and the Cloud Subscription, which provides a per-player license, 1GB cloud storage, unlimited playlists, and custom templates. For businesses requiring more robust storage, the On-Premises package offers a lifetime license, up to 2TB of server storage, and similar features. All packages include email support and useful reports, providing scalable solutions for digital signage needs.`,
      image: 'assets/images/business solutions/post services/vcastplay subscription.png',
      link: 'https://vcastplay.com/packages',
      alt: 'Logo of vcastplay',
    },
    {
      text: 'Content Playlist & Charting Management',
      details: `We ensure that your digital signage always displays the latest audiovisual content by providing real-time updates, keeping your messaging fresh and relevant. With seamless playlist management, you can easily schedule, update, and customize content to engage your audience and meet your marketing goals effortlessly.`,
      image: 'assets/images/business solutions/post services/playlist uploading.jpg',
      alt: 'Managing digital content on a laptop with floating folder icons.',
    },
    {
      text: 'Creative Content Creation',
      details: 'Creates original, superior design and content to help businesses stand out, communicate clearly, and engage with their target consumers. To enable organizations to create aesthetically beautiful, strategically matched content that appeals to their target market and propels business growth.',
      image: 'assets/images/business solutions/post services/creative creation.jpg',
      alt: ' A Professional creating content using an editing application',
    },
    {
      text: 'Helpdesk Support',
      details: `Customer support service available 24 hours a day, 7 days a week, without any interruptions. This means that users or customers can access assistance or resolve issues at any time, including nights, weekends, and holidays. It ensures continuous support for resolving technical problems, answering queries, or providing guidance whenever needed.`,
      image: 'assets/images/business solutions/post services/247 helpdesk.jpg',
      alt: 'An agent providing 24/7 customer assistance.',
    },
    {
      text: 'Audience Measurement Report',
      details: `Empowers businesses with real-time insights into audience behavior and demographics, utilizing advanced video analytics to track foot traffic, engagement levels, and profiles such as age and gender. This data-driven approach optimizes marketing strategies, enhances Digital Out-of-Home (DOOH) campaigns, improves retail layouts, and provides valuable event analytics. By delivering interactive reports and actionable insights, Nyxsys helps businesses maximize ROI, strengthen audience connections, and stay ahead in a competitive market.`,
      image: 'assets/images/business solutions/post services/audience measurement report.png',
      alt: 'Analyzing data on a laptop with colorful visual metrics.',
    },
  ]

  b2bIndustries: any[] = [
    { text: 'Retail', image: 'assets/images/business solutions/b2bindustries/retail.jpg', alt: ' A customer and sales associate use a digital screen in a clothing store.', },
    { text: 'Hospitality', image: 'assets/images/business solutions/b2bindustries/hospitality.jpg', alt: 'Digital screens in a hotel lobby display travel imagery.', },
    { text: 'Transport Hub', image: 'assets/images/business solutions/b2bindustries/transport hub.jpg', alt: 'Interactive digital kiosks line a city street at night.' },
    { text: 'Health Care', image: 'assets/images/business solutions/b2bindustries/healthcare.jpg', alt: 'A digital screen at a medical reception displays health content.', },
    { text: 'Education', image: 'assets/images/business solutions/b2bindustries/education.jpg', alt: 'A teacher presents a lesson using a digital screen.', },
    { text: 'Food Services', image: 'assets/images/business solutions/b2bindustries/food services.jpg', alt: 'Digital menu boards showcase food and drink options in a donut shop.', },
    { text: 'Digital Media Owners', image: 'assets/images/business solutions/b2bindustries/digital media owners.png', alt: ' A large LED screen displays a "Black Friday Sale" ad in a busy city.', },
  ]

  config: any = {
    dots: false,
    arrows: false,
    autoPlay: true,
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
  
  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.business-solution-item');

    elements.forEach((element, index) => {
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });

    this.utils.setPageTitle('Next-Level Digital Display Management | Effortless Control');
    
    this.utils.setMetaUpdateTag('title', 'Next-Level Digital Display Management | Effortless Control',)
    this.utils.setMetaUpdateTag(
      'description',
      "Nyxsys provides advanced digital display management with real-time updates, seamless integration, and optimized audience engagement for impactful advertising."
    )
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'Next-Level Digital Display Management | Effortless Control');
    this.utils.setMetaPropertyTag('og:description', 
      "Nyxsys provides advanced digital display management with real-time updates, seamless integration, and optimized audience engagement for impactful advertising."
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/services/digital-display-management-services');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'Next-Level Digital Display Management | Effortless Control',)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      "Nyxsys provides advanced digital display management with real-time updates, seamless integration, and optimized audience engagement for impactful advertising."
    )
  }

  onClickPrev() {
    this.slickModalCaseStudies.slickPrev();
  }

  onClickNext() {
    this.slickModalCaseStudies.slickNext();
  }

  onClickPlay() {
    const video: any = document.getElementById('vcastplay');
    video.play();
    this.isVcastPlaying = true;
  }
}
