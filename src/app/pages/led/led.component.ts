import { Component, OnInit } from "@angular/core";
import { MaterialUiModule } from "../../modules/material-ui/material-ui.module";
import { ComponentsModule } from "../../modules/components/components.module";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { UtilityService } from "../../services/utility.service";
import { NavigationEnd, Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-led",
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule, RouterLink ],
  templateUrl: "./led.component.html",
  styleUrl: "./led.component.scss",
  animations: [
    trigger("slideIn", [
      state("hidden", style({ opacity: 0, transform: "translateY(100px)" })),
      state("visible", style({ opacity: 1, transform: "translateY(0)" })),
      transition("hidden => visible", animate("600ms ease-out")),
    ]),
  ],
})
export class LedComponent implements OnInit {

  isVisible: boolean[] = [ false, false ];
  isVideoLoading: boolean = true;

  ledInventories: any[] = [];

  whyChooseLED: any[] = [
    { title: 'Eye-Catching & Dynamic', text: "Motion graphics, vivid colors, and stunning visuals make your brand unforgettable.", icon: 'visibility', },
    { title: 'Strategic Locations', text: "Our LED billboards are positioned in high-traffic areas, guaranteeing maximum brand visibility", icon: 'location_on' },
    { title: '24/7 Brand Exposure', text: "Unlike traditional billboards, LED advertising runs day and night, continuously engaging your audience.", icon: 'schedule' },
    { title: 'High ROI & Cost-Effective', text: "Get better reach and engagement than traditional print ads at a competitive price.", icon: 'paid' },
    { title: 'Fast & Flexible Campaigns', text: "Update your ads instantly, run multiple creatives, and launch time-sensitive campaigns effortlessly.", icon: 'rocket_launch' },
  ]

  whoBenefits: any[] = [
    {
      title: 'Corporate Brands',
      text: 'Build brand authority with high-visibility campaigns.',
      image: 'Denstu',
      icon: 'corporate_fare',
    },
    {
      title: 'Retail & E-Commerce',
      text: 'Drive foot traffic and online conversions.',
      image: 'Lazada',
      icon: 'storefront',
    },
    {
      title: 'Restaurants & Food Chains',
      text: 'Promote new menus, discounts, and store locations',
      image: 'JFC',
      icon: 'lunch_dining',
    },
    {
      title: 'Events & Concerts',
      text: 'Create buzz and attract attendees..',
      image: 'Wanderland',
      icon: 'festival',
    },
    {
      title: 'Hotels & Travel Agencies',
      text: 'Showcase your destinations to potential travelers.',
      image: 'Solaire',
      icon: 'flight',
    },
    {
      title: 'Tech & Telecom',
      text: 'Announce product launches and exclusive offers.',
      image: 'Vivo',
      icon: 'phone_iphone',
    },
  ]

  mallPosterboxes: any[] = [
    {
      text: "Glorietta",
      items: [
        { 
          text: "Glorietta, Entrance in front of Landmark", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta, Entrance in front of Landmark.webp",
          alt: "Glorietta Mall Posterbox Located at Entrance in front of Landmark",
        },
        { 
          text: "Glorietta 1 Entrance in front of SM", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta 1, Entrance in front of SM.webp",
          alt: "Glorietta 1 Mall Posterbox Located at Entrance in front of SM",
        },
        { 
          text: "Glorietta 1, Near True Value", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta 1, Near True Value.webp",
          alt: "Glorietta 1 Mall Posterbox Located near True Value",
        },
        { 
          text: "Glorietta 2, Ground fl. Entrance near Holiday Inn", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta 2, Ground fl. Entrance near Holiday Inn.webp",
          alt: "Glorietta 2 Mall Posterbox Located at Ground flr. Entrance near Holiday Inn",
        },
        { 
          text: "Glorietta 3 Drop-off, in front of Steel Parking", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta 3 Drop-off, in front of Steel Parking.webp",
          alt: "Glorietta 3 Mall Posterbox Located at Drop-off, in front of Steel Parking",
        },
        { 
          text: "Glorietta 4, Drop-off Entrance", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta 4, Drop-off Entrance.webp",
          alt: "Glorietta 4 Mall Posterbox Located at Drop-off Entrance",
        },
        { 
          text: "Glorietta 4, Near Activity Center", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta 4, Near Activity Center.webp",
          alt: "Glorietta 4 Mall Posterbox Located Near Activity Center",
        },
        { 
          text: "Glorietta 4, 2nd fl. beside Havaianas", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta 4, 2nd fl. beside Havaianas.webp",
          alt: "Glorietta 4 Mall Posterbox Located at 2nd flr. beside Havaianas",
        },
        { 
          text: "Glorietta 4, Activity Center, Beside Mcdonalds", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/glorietta/Glorietta 4, Activity Center, Beside Mcdonalds.webp",
          alt: "Glorietta 4 Mall Posterbox Located at Activity Center beside Mcdonalds",
        },
      ]
    }, 
    {
      text: "UP Town Center",
      items: [
        { 
          text: "Phase 1 Building in front of Mercado Supermarket", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/uptown center/Phase 1 Building in front of Mercado Supermarket.webp",
          alt: "UP Town Center Mall Posterbox Located at Phase 1 Building in front of Mercado Supermarket "
        },
        { 
          text: "Phase 1 Building in front of National Bookstore", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/uptown center/Phase 1 Building in front of National Bookstore.webp",
          alt: "UP Town Center Mall Posterbox Located at Phase 1 Building in front of National Bookstore"
        },
        { 
          text: "Phase 1 Building exit beside Pepper Lunch", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/uptown center/Phase 1 Building exit beside Pepper Lunch.webp",
          alt: "UP Town Center Mall Posterbox Located at Phase 1 Building exit beside Pepper Lunch"
        },
        { 
          text: "Phase 1 Building, 2nd flr. beside Sbarro", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/uptown center/Phase 1 Building, 2nd flr. beside Sbarro.webp",
          alt: "UP Town Center Mall Posterbox Located at Phase 1 Building, 2nd flr. beside Sbarro"
        },
        { 
          text: "Phase 2 Building 2F in front of Dotonbori", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/uptown center/Phase 2 Building 2F in front of Dotonbori.webp",
          alt: "UP Town Center Mall Posterbox Located at Phase 2 Building 2F in front of Dotonbori"
        },
        { 
          text: "Phase 2 Building entrance near Uniqlo", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/uptown center/Phase 2 Building entrance near Uniqlo.webp",
          alt: "UP Town Center Mall Posterbox Located at Phase 2 Building entrance near Uniqlo"
        },
      ]
    },
    {
      text: "Trinoma",
      items: [
        { 
          text: "Ground Level, North Car Park Drop Off", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/trinoma/Ground Level, North Car Park Drop Off.webp",
          alt: "Trinoma Mall Posterbox at Ground Level, North Car Park Drop Off"
        },
        { 
          text: "Level 1, Activity Center near Mister Donut", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/trinoma/Level 1, Activity Center near Mister Donut.webp",
          alt: "Trinoma Mall Posterbox at Level 1, Activity Center near Mister Donut"
        },
        { 
          text: "Level 2, Near Shoe Salon", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/trinoma/Level 2, Near Shoe Salon.webp",
          alt: "Trinoma Mall Posterbox at Level 2, Near Shoe Salon"
        },
        { 
          text: "Level 2, Entrance near Bench Fix", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/trinoma/Level 2, Entrance near Bench Fix.webp",
          alt: "Trinoma Mall Posterbox at Level 2, Entrance near Bench Fix"
        },
        { 
          text: "Level 2, Food Choices 1", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/trinoma/Level 2, Food Choices 1.webp",
          alt: "Trinoma Mall Posterbox at Level 2, Food Choices 1"
        },
        { 
          text: "Level 2, Food Choices 2", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/trinoma/Level 2, Food Choices 2.webp",
          alt: "Trinoma Mall Posterbox at Level 2, Food Choices 2"
        },
        { 
          text: "Level 3, Near Irvins", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/trinoma/Level 3, Near Irvins.webp",
          alt: "Trinoma Mall Posterbox at Level 3, Near Irvins"
        },
      ]
    },
    {
      text: "Market Market",
      items: [
        { 
          text: "Ground Floor beside elevator in front of National Bookstore", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/market market/Ground Flr. beside elevator in front of National Bookstore.webp",
          alt: "Market Market Mall Posterbox at Ground Floor beside elevator in front of National Bookstore"
        },
        { 
          text: "1st floor Activity Center in front of Levi's", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/market market/1st floor Activity Center in front of Levi's.webp",
          alt: "Market Market Mall Posterbox at 1st floor Activity Center in front of Levi's"
        },
        { 
          text: "2nd Floor in front of MoshiKoshi", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/market market/2nd Floor in front of MoshiKoshi.webp",
          alt: "Market Market Mall Posterbox at 2nd Floor in front of MoshiKoshi"
        },
        { 
          text: "Drop-off, Entrance from Terminal", 
          image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/market market/Drop-off Entrance from Terminal.webp",
          alt: "Market Market Mall Posterbox at Drop-off, Entrance from Terminal"
        },
      ]
    },
    {
        text: "Ever Commonwealth",
        items: [
          {
            text: "GF Entrance near Shakey's",
            image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/ever commonwealth/GF Entrance near Shakey's.webp",
            alt: "Ever Commonwealth Mall Posterbox at Entrance near Shakey's"
          },
          {
            text: "GF Main Entrance",
            image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/ever commonwealth/GF Main Entrance.webp",
            alt: "Ever Commonwealth Mall Posterbox at Main Entrance"
          },
          {
            text: "LGF near Activity Center Left Side",
            image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/ever commonwealth/LGF near Activity Center Left Side.webp",
            alt: "Ever Commonwealth Mall Posterbox at near activity center left side"
          },
          {
            text: "LGF near Activity Center Right Side",
            image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/ever commonwealth/LGF near Activity Center Right Side.webp",
            alt: "Ever Commonwealth Mall Posterbox at near activity center right side"
          },
          {
            text: "UGF near Escalator Going Up",
            image: "https://nyxsys.ph/assets/webp-images/led/mall posterboxes/ever commonwealth/UGF near Escalator Going Up.webp",
            alt: "Ever Commonwealth Mall Posterbox at near Escalator"
          }
        ]
      }
  ]

  constructor(private utils: UtilityService, private router: Router) {
    this.ledInventories = utils.ledInventories;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    const elements = document.querySelectorAll(".led-item");      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });

    this.utils.setPageTitle('LED Billboard Advertising | High-Impact Digital Displays');

    this.utils.setMetaUpdateTag('title', 'LED Billboard Advertising | High-Impact Digital Displays',);
    this.utils.setMetaUpdateTag(
      'description',
      "Capture attention with Nyxsys' LED billboards. Our HD digital displays deliver vibrant, engaging ads in prime spots like EDSA Orense and C5 Market Market."
    )
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', 'LED Billboard Advertising | High-Impact Digital Displays');
    this.utils.setMetaPropertyTag('og:description', 
      "Capture attention with Nyxsys' LED billboards. Our HD digital displays deliver vibrant, engaging ads in prime spots like EDSA Orense and C5 Market Market."
    );
    this.utils.setMetaPropertyTag('og:url', 'https://nyxsys.ph/services/led-media-inventories');

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', 'LED Billboard Advertising | High-Impact Digital Displays',)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      "Capture attention with Nyxsys' LED billboards. Our HD digital displays deliver vibrant, engaging ads in prime spots like EDSA Orense and C5 Market Market."
    )
  }

  onVideoLoaded(){
    this.isVideoLoading = false;
  }
}
