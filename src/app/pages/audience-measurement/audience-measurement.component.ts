import { Component, OnInit } from '@angular/core';
import { MaterialUiModule } from '../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../modules/components/components.module';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GraphsComponent } from "../../components/graphs/graphs.component";
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-audience-measurement',
  standalone: true,
  imports: [MaterialUiModule, ComponentsModule, GraphsComponent],
  templateUrl: './audience-measurement.component.html',
  styleUrl: './audience-measurement.component.scss',
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
    ]),
  ],
})
export class AudienceMeasurementComponent implements OnInit {

  isVisible: boolean[] = [false, false];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
  };


  indoorAudienceMeasurement: any[] = [
    {
      name: 'Graph of dwell time',
      image: 'assets/images/audience measurement/indoor/graph 1.png',
      text: 'Dwell time, the duration shoppers spend viewing advertisements, is a crucial metric for assessing engagement and effectiveness in Nyxsys Mall Posterboxes. Longer dwell times indicate higher audience interest, helping advertisers optimize content with captivating visuals, targeted messaging, and strategic placement in high-traffic areas like food courts or escalators. By leveraging advanced tracking technologies such as motion sensors and audience analytics, Nyxsys provides real-time insights into viewer behavior, enabling data-driven adjustments to boost ad visibility and ROI. This makes Nyxsys Mall Posterboxes a powerful tool for delivering impactful and results-oriented campaigns in bustling mall environments.',
      alt: 'Graph of Dwell time for Posterbox from CaltonDatx',
    },
    {
      name: 'Graph of Demographics',
      image: 'assets/images/audience measurement/indoor/graph 2.png',
      text: 'Demographics are key to maximizing the impact of Nyxsys Mall Posterboxes, as they allow advertisers to tailor messages based on audience characteristics like age, gender, income, and lifestyle. Using advanced analytics, Nyxsys gathers real-time data on who interacts with ads, enabling precise targeting and content customization. Malls attract diverse groups, from young professionals and families to students and seniors, making them ideal for reaching multiple market segments. Advertisers can strategically place ads—like tech-focused campaigns near cafes or family-oriented messages near play areas—ensuring higher engagement, better recall, and stronger conversions.',
      alt: 'Graph of Demographics for Posterbox from CaltonDatx',
    },
    {
      name: 'Graph of Impression Count',
      image: 'assets/images/audience measurement/indoor/graph of impression.png',
      text: 'Impression count refers to the number of times content, such as an ad or post, is displayed or viewed, making it a crucial metric for building brand awareness. High impressions signify successful visibility, keeping your brand top-of-mind and aiding in evaluating campaign performance. Paired with engagement metrics, impression data offers insights into audience reach and targeting effectiveness, guiding better strategies. For instance, Nyxsys Philippines, Inc. maximizes impressions with its Iconic LED Billboards in EDSA Guadalupe, ensuring millions of daily views that enhance brand recall and visibility. By leveraging impression counts, businesses create a foundation for awareness, influence, and growth.',
      alt: 'Graph of Impression Count for Posterbox from CaltonDatx',
    },
  ];

  outdoorAudienceMeasurement: any[] = [
    {
      name: 'Vehicle Count',
      image: 'assets/images/audience measurement/outdoor/Vehicle Count.png',
      text: 'Vehicle count measures the number of vehicles passing a location within a specific timeframe, making it essential for evaluating the reach of outdoor ads like billboards. High vehicle counts indicate greater visibility and more opportunities for impressions, enhancing brand awareness and recall. For example, ads along high-traffic roads like EDSA Guadalupe can reach millions of commuters daily, maximizing exposure and ROI. Using vehicle count data, businesses can strategically place ads to effectively reach their target audience and ensure campaign success.',
      alt: 'Graph of Vehicle Count for LED Billboards from CaltonDatx',
    },
    {
      name: 'Audience Impressions',
      image: 'assets/images/audience measurement/outdoor/Vehicle Impression.png',
      text: 'Audience impressions measure how often an advertisement is seen by people, indicating its overall reach and visibility. This metric is crucial for evaluating the effectiveness of marketing campaigns, as higher impressions mean more opportunities for brand exposure and recall. Whether through digital platforms or outdoor advertising like billboards, audience impressions help businesses understand their reach and optimize placements. For example, ads in high-traffic areas like EDSA Guadalupe can generate millions of impressions daily, ensuring maximum audience engagement and campaign impact.',
      alt: 'Graph of Audience Impressions for LED Billboards from CaltonDatx',
    },
    {
      name: 'Dwell Time',
      image: 'assets/images/audience measurement/outdoor/Vehicle Dwell Time.png',
      text: 'Vehicle dwell time measures how long vehicles remain in front of a location, such as at stoplights or in traffic, making it a vital metric for outdoor advertising. Longer dwell times mean drivers and passengers have more time to notice and engage with ads, boosting brand recall and effectiveness. For example, billboards at high-traffic intersections ensure prolonged visibility, creating a captive audience for advertisers. Leveraging dwell time data helps businesses strategically place ads for maximum engagement and impact.',
      alt: 'Graph of Dwell time for LED Billboards from CaltonDatx',
    },
  ];
  
  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.audience-item');

    elements.forEach((element, index) => {
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });
  
    this.utils.setPageTitle('Audience Measurement | Data-Driven Insights by Calton Datx');

    this.utils.setMetaUpdateTag('title', 'Audience Measurement | Data-Driven Insights by Calton Datx',)
    this.utils.setMetaUpdateTag(
      'description',
      "Leverage Calton Datx's audience measurement for real-time insights, behavioral trends, and AI-driven analytics to optimize DOOH campaigns and engagement."
    )
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'Audience Measurement | Data-Driven Insights by Calton Datx');
    this.utils.setMetaPropertyTag('og:description', 
      "Leverage Calton Datx's audience measurement for real-time insights, behavioral trends, and AI-driven analytics to optimize DOOH campaigns and engagement."
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/services/audience-measurement');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'Audience Measurement | Data-Driven Insights by Calton Datx',)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      "Leverage Calton Datx's audience measurement for real-time insights, behavioral trends, and AI-driven analytics to optimize DOOH campaigns and engagement."
    )
  }
}
