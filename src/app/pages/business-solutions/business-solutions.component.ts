import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Meta, Title } from '@angular/platform-browser';

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
      image: 'assets/images/business solutions/case studies/globe.jpg'
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
      image: 'assets/images/business solutions/case studies/dunkin.jpg'
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
    // {
    //   text: 'Content Playlist Management',
    //   details: `We ensure that your digital signage always displays the latest audiovisual content by providing real-time updates, keeping your messaging fresh and relevant. With seamless playlist management, you can easily schedule, update, and customize content to engage your audience and meet your marketing goals effortlessly.`,
    //   image: 'assets/images/business solutions/post services/playlist uploading.jpg'
    // },
    // {
    //   text: 'Helpdesk Support',
    //   details: `Customer support service available 24 hours a day, 7 days a week, without any interruptions. This means that users or customers can access assistance or resolve issues at any time, including nights, weekends, and holidays. It ensures continuous support for resolving technical problems, answering queries, or providing guidance whenever needed.`,
    //   image: 'assets/images/business solutions/post services/247 helpdesk.jpg'
    // },
    // {
    //   text: 'Social Media Content Management',
    //   details: `We provide comprehensive social media creative services to enhance your brand's online presence and build strong connections with your audience. From initial ideas to the final design, we create visually captivating content and powerful messages tailored to grab your audience's attention and boost engagement. Let our team support you in amplifying your social media presence with unique and impactful creative that resonates.`,
    //   image: 'assets/images/business solutions/post services/social media content management.jpg'
    // },
    // {
    //   text: 'Creative Content Creation',
    //   details: 'Creates original, superior design and content to help businesses stand out, communicate clearly, and engage with their target consumers. To enable organizations to create aesthetically beautiful, strategically matched content that appeals to their target market and propels business growth.',
    //   image: 'assets/images/business solutions/post services/creative creation.jpg'
    // },
    {
      text: 'Software Subscription of vcastplay',
      details: `vcastplay offers flexible subscription options, including a Free Trial for 15 days with 5GB cloud storage, and the Cloud Subscription, which provides a per-player license, 1GB cloud storage, unlimited playlists, and custom templates. For businesses requiring more robust storage, the On-Premises package offers a lifetime license, up to 2TB of server storage, and similar features. All packages include email support and useful reports, providing scalable solutions for digital signage needs.`,
      image: 'assets/images/business solutions/post services/vcastplay subscription.png',
      link: 'https://vcastplay.com/packages',
    },
    {
      text: 'Content Playlist & Charting Management',
      details: `We ensure that your digital signage always displays the latest audiovisual content by providing real-time updates, keeping your messaging fresh and relevant. With seamless playlist management, you can easily schedule, update, and customize content to engage your audience and meet your marketing goals effortlessly.`,
      image: 'assets/images/business solutions/post services/playlist uploading.jpg'
    },
    {
      text: 'Creative Content Creation',
      details: 'Creates original, superior design and content to help businesses stand out, communicate clearly, and engage with their target consumers. To enable organizations to create aesthetically beautiful, strategically matched content that appeals to their target market and propels business growth.',
      image: 'assets/images/business solutions/post services/creative creation.jpg'
    },
    {
      text: 'Helpdesk Support',
      details: `Customer support service available 24 hours a day, 7 days a week, without any interruptions. This means that users or customers can access assistance or resolve issues at any time, including nights, weekends, and holidays. It ensures continuous support for resolving technical problems, answering queries, or providing guidance whenever needed.`,
      image: 'assets/images/business solutions/post services/247 helpdesk.jpg'
    },
    {
      text: 'Audience Measurement Report',
      details: `Empowers businesses with real-time insights into audience behavior and demographics, utilizing advanced video analytics to track foot traffic, engagement levels, and profiles such as age and gender. This data-driven approach optimizes marketing strategies, enhances Digital Out-of-Home (DOOH) campaigns, improves retail layouts, and provides valuable event analytics. By delivering interactive reports and actionable insights, Nyxsys helps businesses maximize ROI, strengthen audience connections, and stay ahead in a competitive market.`,
      image: 'assets/images/business solutions/post services/audience measurement report.png'
    },
  ]

  b2bIndustries: any[] = [
    { text: 'Retail', image: 'assets/images/business solutions/b2bindustries/retail.jpg' },
    { text: 'Hospitality', image: 'assets/images/business solutions/b2bindustries/hospitality.jpg' },
    { text: 'Transport Hub', image: 'assets/images/business solutions/b2bindustries/transport hub.jpg' },
    { text: 'Health Care', image: 'assets/images/business solutions/b2bindustries/healthcare.jpg' },
    { text: 'Education', image: 'assets/images/business solutions/b2bindustries/education.jpg' },
    { text: 'Food Services', image: 'assets/images/business solutions/b2bindustries/food services.jpg' },
    { text: 'Digital Media Owners', image: 'assets/images/business solutions/b2bindustries/digital media owners.png' },
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
  
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.business-solution-item');

    elements.forEach((element, index) => {
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });

    this.title.setTitle('Digital Display Management Services - Real-Time Signage & Content Solutions');

    this.meta.updateTag({
      name: 'title',
      content: 'Digital Display Management Services - Real-Time Signage & Content Solutions'
    });

    this.meta.updateTag({
      name: 'description',
      content: 'Our digital display management services offer cutting-edge digital signage solutions, interactive displays, and real-time content updates. We specialize in LED display management, multi-screen setups, and seamless digital content distribution, ensuring efficient visual content management across networks.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Digital Display Solutions, Digital Signage Management, Digital Advertising Services, Interactive Display Solutions, Content Management Systems, Real-Time Display Updates, Digital Content Distribution, LED Display Management, Multi-Screen Display Solutions, Digital Signage Network, Visual Content Management'
    });


    // Update OpenGraph Meta
    this.meta.updateTag({
      property: 'og:title',
      content: 'Digital Display Management Services - Real-Time Signage & Content Solutions'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Our digital display management services offer cutting-edge digital signage solutions, interactive displays, and real-time content updates. We specialize in LED display management, multi-screen setups, and seamless digital content distribution, ensuring efficient visual content management across networks.'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://nyxsys.ph/assets/images/nyxsys-logo-loading.png'
    });
    
    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://nyxsys.ph/services/digital-display-management-services'
    });

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
