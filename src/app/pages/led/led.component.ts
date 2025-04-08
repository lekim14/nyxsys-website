import { Component, OnInit } from "@angular/core";
import { MaterialUiModule } from "../../modules/material-ui/material-ui.module";
import { ComponentsModule } from "../../modules/components/components.module";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { UtilityService } from "../../services/utility.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-led",
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
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

  ledInventories: any[] = [
    { 
      text: "ICONIC - EDSA ORENSE LED (SOUTH BOUND)",
      address: "447 Magsaysay Avenue, Guadalupe Nuevo, Makati City",
      size: "80FT (H) x 140FT (W)",
      image: "assets/images/led/led inventories/iconic-2.png",
      alt: "Iconic LED Billboard along EDSA Orense Southbound",
      why: 'High-visibility LED billboard along EDSA Southbound, ensuring massive daily foot and vehicle traffic.',
    },
    { 
      text: "EDSA PARAGON LED (NORTHBOUND)",
      address: "Ad wall of Paragon Plaza Bldg, 162 EDSA corner Reliance St., Mandaluyong City",
      size: "70FT (H) x 60FT (W)",
      image: "assets/images/led/led inventories/paragon.png",
      alt: "Paragon LED Billboard along EDSA Northbound",
      why: 'A highly prominent, high-visibility LED billboard strategically located along EDSA Northbound, guaranteeing exposure to a massive volume of daily foot and vehicle traffic, making it an ideal platform for maximum brand visibility and engagement.',
    },
    { 
      text: "C5 MARKET MARKET LED (NORTHBOUND)",
      address: "447 Magsaysay Avenue, Guadalupe Nuevo, Makati City",
      size: "30FT (H) x 80FT (W)",
      image: "assets/images/led/led inventories/market market.png",
      alt: "C5 Market Market Billboard Northbound",
      why: 'Positioned in a prime location along C5 at Market! Market!, this dynamic LED billboard attracts massive daily foot and vehicle traffic, maximizing brand reach.',
    },
  ]

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
      image: 'Denstu'
    },
    {
      title: 'Retail & E-Commerce',
      text: 'Drive foot traffic and online conversions.',
      image: 'Lazada'
    },
    {
      title: 'Restaurants & Food Chains',
      text: 'Promote new menus, discounts, and store locations',
      image: 'JFC'
    },
    {
      title: 'Events & Concerts',
      text: 'Create buzz and attract attendees..',
      image: 'Wanderland'
    },
    {
      title: 'Hotels & Travel Agencies',
      text: 'Showcase your destinations to potential travelers.',
      image: 'Solaire'
    },
    {
      title: 'Tech & Telecom',
      text: 'Announce product launches and exclusive offers.',
      image: 'Vivo'
    },
  ]

  mallPosterboxes: any[] = [
    {
      text: "Glorietta",
      items: [
        { 
          text: "Glorietta, Entrance in front of Landmark", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta, Entrance in front of Landmark.png",
          alt: "Glorietta Mall Posterbox Located at Entrance in front of Landmark",
        },
        { 
          text: "Glorietta 1 Entrance in front of SM", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta 1, Entrance in front of SM.jpg",
          alt: "Glorietta 1 Mall Posterbox Located at Entrance in front of SM",
        },
        { 
          text: "Glorietta 1, Near True Value", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta 1, Near True Value.png",
          alt: "Glorietta 1 Mall Posterbox Located near True Value",
        },
        { 
          text: "Glorietta 2, Ground fl. Entrance near Holiday Inn", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta 2, Ground fl. Entrance near Holiday Inn.png",
          alt: "Glorietta 2 Mall Posterbox Located at Ground flr. Entrance near Holiday Inn",
        },
        { 
          text: "Glorietta 3 Drop-off, in front of Steel Parking", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta 3 Drop-off, in front of Steel Parking.png",
          alt: "Glorietta 3 Mall Posterbox Located at Drop-off, in front of Steel Parking",
        },
        { 
          text: "Glorietta 4, Drop-off Entrance", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta 4, Drop-off Entrance.png",
          alt: "Glorietta 4 Mall Posterbox Located at Drop-off Entrance",
        },
        { 
          text: "Glorietta 4, Near Activity Center", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta 4, Near Activity Center.png",
          alt: "Glorietta 4 Mall Posterbox Located Near Activity Center",
        },
        { 
          text: "Glorietta 4, 2nd fl. beside Havaianas", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta 4, 2nd fl. beside Havaianas.jpg",
          alt: "Glorietta 4 Mall Posterbox Located at 2nd flr. beside Havaianas",
        },
        { 
          text: "Glorietta 4, Activity Center, Beside Mcdonalds", 
          image: "assets/images/led/mall posterboxes/glorietta/Glorietta 4, Activity Center, Beside Mcdonalds.jpg",
          alt: "Glorietta 4 Mall Posterbox Located at Activity Center beside Mcdonalds",
        },
      ]
    }, 
    {
      text: "UP Town Center",
      items: [
        { 
          text: "Phase 1 Building in front of Mercado Supermarket", 
          image: "assets/images/led/mall posterboxes/uptown center/Phase 1 Building in front of Mercado Supermarket.png",
          alt: "UP Town Center Mall Posterbox Located at Phase 1 Building in front of Mercado Supermarket "
        },
        { 
          text: "Phase 1 Building in front of National Bookstore", 
          image: "assets/images/led/mall posterboxes/uptown center/Phase 1 Building in front of National Bookstore.jpg",
          alt: "UP Town Center Mall Posterbox Located at Phase 1 Building in front of National Bookstore"
        },
        { 
          text: "Phase 1 Building exit beside Pepper Lunch", 
          image: "assets/images/led/mall posterboxes/uptown center/Phase 1 Building exit beside Pepper Lunch.png",
          alt: "UP Town Center Mall Posterbox Located at Phase 1 Building exit beside Pepper Lunch"
        },
        { 
          text: "Phase 1 Building, 2nd flr. beside Sbarro", 
          image: "assets/images/led/mall posterboxes/uptown center/Phase 1 Building, 2nd flr. beside Sbarro.png",
          alt: "UP Town Center Mall Posterbox Located at Phase 1 Building, 2nd flr. beside Sbarro"
        },
        { 
          text: "Phase 2 Building 2F in front of Dotonbori", 
          image: "assets/images/led/mall posterboxes/uptown center/Phase 2 Building 2F in front of Dotonbori.jpg",
          alt: "UP Town Center Mall Posterbox Located at Phase 2 Building 2F in front of Dotonbori"
        },
        { 
          text: "Phase 2 Building entrance near Uniqlo", 
          image: "assets/images/led/mall posterboxes/uptown center/Phase 2 Building entrance near Uniqlo.png",
          alt: "UP Town Center Mall Posterbox Located at Phase 2 Building entrance near Uniqlo"
        },
      ]
    },
    {
      text: "Trinoma",
      items: [
        { 
          text: "Ground Level, North Car Park Drop Off", 
          image: "assets/images/led/mall posterboxes/trinoma/Ground Level, North Car Park Drop Off.jpg",
          alt: "Trinoma Mall Posterbox at Ground Level, North Car Park Drop Off"
        },
        { 
          text: "Level 1, Activity Center near Mister Donut", 
          image: "assets/images/led/mall posterboxes/trinoma/Level 1, Activity Center near Mister Donut.jpg",
          alt: "Trinoma Mall Posterbox at Level 1, Activity Center near Mister Donut"
        },
        { 
          text: "Level 2, Near Shoe Salon", 
          image: "assets/images/led/mall posterboxes/trinoma/Level 2, Near Shoe Salon.png",
          alt: "Trinoma Mall Posterbox at Level 2, Near Shoe Salon"
        },
        { 
          text: "Level 2, Entrance near Bench Fix", 
          image: "assets/images/led/mall posterboxes/trinoma/Level 2, Entrance near Bench Fix.jpg",
          alt: "Trinoma Mall Posterbox at Level 2, Entrance near Bench Fix"
        },
        { 
          text: "Level 2, Food Choices 1", 
          image: "assets/images/led/mall posterboxes/trinoma/Level 2, Food Choices 1.jpg",
          alt: "Trinoma Mall Posterbox at Level 2, Food Choices 1"
        },
        { 
          text: "Level 2, Food Choices 2", 
          image: "assets/images/led/mall posterboxes/trinoma/Level 2, Food Choices 2.jpg",
          alt: "Trinoma Mall Posterbox at Level 2, Food Choices 2"
        },
        { 
          text: "Level 3, Near Irvins", 
          image: "assets/images/led/mall posterboxes/trinoma/Level 3, Near Irvins.jpg",
          alt: "Trinoma Mall Posterbox at Level 3, Near Irvins"
        },
      ]
    },
    {
      text: "Market Market",
      items: [
        { 
          text: "Ground Floor beside elevator in front of National Bookstore", 
          image: "assets/images/led/mall posterboxes/market market/Ground Flr. beside elevator in front of National Bookstore.png",
          alt: "Market Market Mall Posterbox at Ground Floor beside elevator in front of National Bookstore"
        },
        { 
          text: "1st floor Activity Center in front of Levi's", 
          image: "assets/images/led/mall posterboxes/market market/1st floor Activity Center in front of Levi's.jpg",
          alt: "Market Market Mall Posterbox at 1st floor Activity Center in front of Levi's"
        },
        { 
          text: "2nd Floor in front of MoshiKoshi", 
          image: "assets/images/led/mall posterboxes/market market/2nd Floor in front of MoshiKoshi.jpg",
          alt: "Market Market Mall Posterbox at 2nd Floor in front of MoshiKoshi"
        },
        { 
          text: "Drop-off, Entrance from Terminal", 
          image: "assets/images/led/mall posterboxes/market market/Drop-off Entrance from Terminal.png",
          alt: "Market Market Mall Posterbox at Drop-off, Entrance from Terminal"
        },
      ]
    }
  ]

  constructor(private utils: UtilityService, private router: Router) {
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
}
