import { Component, Input } from '@angular/core';
import { MaterialUiModule } from '../../../modules/material-ui/material-ui.module';
import { ComponentsModule } from '../../../modules/components/components.module';
import { UtilityService } from '../../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [ MaterialUiModule, ComponentsModule ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  @Input() page!: string;
  routeLink: string = '';

  isVisible: boolean[] = [ false, false ];
  whyAdvertise: any[] = [
    {
      link: '/services/led-media-inventories/iconic-edsa-orense-led',
      title: 'Why Advertise on EDSA Iconic LED?',
      items: [
        { 
          title: 'Unmatched daily exposure to foot and vehicle traffic.', 
          text: "This LED billboard, which is positioned prominently along EDSA Guadalupe, draws the attention of more than half a million commuters, vehicles, and pedestrians every day. ", 
          icon: 'visibility', 
        },
        { 
          title: 'Prime spot along major commercial corridors.', 
          text: "This billboard maintains maximum exposure for both northbound and southbound traffic because it is situated along EDSA, Metro Manila's busiest and most commercially important road. ", 
          icon: 'location_on' 
        },
        { 
          title: 'Visibility from high-traffic choke points.', 
          text: "Your advertisements will undoubtedly receive greater visibility as cars slow down or stop because they are situated directly at the Guadalupe Bridge region, one of EDSA's main traffic bottlenecks.", 
          icon: 'visibility' 
        },
      ]
    },
    {
      link: '/services/led-media-inventories/edsa-paragon-led',
      title: 'Why Advertise on the EDSA Paragon LED?',
      items: [
        {
          title: 'Massive Daily Visibility',
          text: 'With its grand scale and premium LED quality, the Paragon LED commands attention from thousands of daily commuters, pedestrians, and motorists.',
          icon: 'visibility'
        },
        {
          title: 'Positioned in a Major Commercial Zone',
          text: 'EDSA is Metro Manila’s primary business artery. This billboard ensures visibility to both business professionals and everyday consumers traveling through one of the city’s most dynamic zones.',
          icon: 'location_on'
        },
        {
          title: 'Strategic in Placement at a Major Traffic Junction',
          text: 'Ads benefit from extended viewer attention during peak hours because they are situated right before Guadalupe Bridge, a renowned bottleneck.',
          icon: 'traffic'
        }
      ]
    },
    {
      link: '/services/led-media-inventories/c5-market-market-led',
      title: 'Why Advertise on C5 Market! Market! LED?',
      items: [
        {
          title: 'High visibility in a premium BGC-adjacent location',
          text: 'Situated along C5, right beside Market! Market! and just minutes from Bonifacio Global City, this LED commands attention from thousands of daily commuters, private vehicles, and mall-goers.',
          icon: 'visibility'
        },
        {
          title: 'Surrounded by commercial hotspots',
          text: `The billboard is located in one of Metro Manila's busiest lifestyle districts, surrounded by shopping centers, business offices, and high-density residential areas—ensuring a steady stream of eyes on your brand.`,
          icon: 'shop'
        },
        {
          title: 'Strategic placement in a busy traffic zone',
          text: 'The C5 Market Market LED sits along a major choke point, where heavy traffic naturally slows vehicles down, increasing ad dwell time and maximizing message retention.',
          icon: 'traffic'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-northbound-static-billboard',
      title: 'Why Advertise on EDSA ORENSE Northbound Static Billboard?',
      items: [
        {
          title: 'Demand Attention in a Strategic Area',
          text: 'This billboard, which is located right before Guadalupe Bridge, targets drivers who are slowing down or stopping at one of the main traffic intersections in EDSA.',
          icon: 'directions_car'
        },
        {
          title: 'Huge Exposure Every Day',
          text: 'Gain visibility in front of thousands of northbound cars arriving from important commercial districts in the south.',
          icon: 'visibility'
        },
        {
          title: 'Strong Business Visibility',
          text: `With its ideal location along Metro Manila's main thoroughfare, your message receives constant brand awareness in a densely populated area.`,
          icon: 'rss_feed'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-southbound-static-billboard',
      title: 'Why Advertise on the EDSA MARCALEON Static Billboard?',
      items: [
        {
          title: 'Two-Way Promotion, One Strong Billboard',
          text: 'Your brand dominates both EDSA directions with double-faced visibility, increasing memory and maximizing impressions.',
          icon: 'visibility'
        },
        {
          title: 'Located at a Choke Point with High Density',
          text: 'It is situated in a busy region where cars slow down or stop during rush hour, close to Shaw Blvd. and Boni MRT.',
          icon: 'traffic'
        },
        {
          title: 'The Central Urban Catchment',
          text: 'Attract commuters from nearby business centers such as Makati CBD, BGC, and Ortigas Center.',
          icon: 'business'
        },
        {
          title: 'Perfect for All-Day, All-Week Exposure',
          text: 'Static billboards are ideal for long-term awareness efforts because they provide a consistent brand presence.',
          icon: 'access_time'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-northbound-static-billboard',
      title: 'Why Advertise on the EDSA MARCALEON Static Billboard?',
      items: [
        {
          title: 'Two-Way Promotion, One Strong Billboard',
          text: 'Your brand dominates both EDSA directions with double-faced visibility, increasing memory and maximizing impressions.',
          icon: 'visibility'
        },
        {
          title: 'Located at a Choke Point with High Density',
          text: 'It is situated in a busy region where cars slow down or stop during rush hour, close to Shaw Blvd. and Boni MRT.',
          icon: 'traffic'
        },
        {
          title: 'The Central Urban Catchment',
          text: 'Attract commuters from nearby business centers such as Makati CBD, BGC, and Ortigas Center.',
          icon: 'business'
        },
        {
          title: 'Perfect for All-Day, All-Week Exposure',
          text: 'Static billboards are ideal for long-term awareness efforts because they provide a consistent brand presence.',
          icon: 'access_time'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-orense-parallel-northbound-static-billboard',
      title: 'Why Advertise on the EDSA ORENSE Parallel Northbound Static Billboard?',
      items: [
        {
          title: 'Extended Duration of Viewer Dwell',
          text: 'Its parallel placement keeps your message visible as cars pass by the billboard, maximizing the amount of time your audience is exposed.',
          icon: ''
        },
        {
          title: 'Placement with High Impact at a Crucial Choke Point',
          text: 'situated close to Orense Street and Guadalupe Bridge, where traffic jams frequently cause cars to slow down or stop, improving visibility.',
          icon: ''
        },
        {
          title: 'Location of the Strategic Gateway',
          text: 'is to reach professionals, decision-makers, and everyday commuters who are traveling to the northern metro from BGC, Makati CBD, and Pasay.',
          icon: ''
        },
        {
          title: 'Reliable, Continuous Brand Awareness',
          text: 'Static billboards are ideal for long-term messaging because they are always operational.',
          icon: ''
        }
      ]
    }
  ];

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
    ];
  
  meta: any[] = [
    {
      link: '/services/led-media-inventories/iconic-edsa-orense-led',
      metaTitle: 'Advertise on ICONIC EDSA Orense LED Billboard | Premium LED Billboard in Makati',
      metaDescription: 'Advertise at the ICONIC EDSA Orense LED Billboard in Makati City. Capture thousands of daily commuters on EDSA Southbound with high-impact, high-visibility LED advertising.',
      header: 'Advertise on ICONIC EDSA Orense LED Billboard in Makati City',
      intro: `The high visibility LED billboard along EDSA Southbound, which guarantees a lot of foot and vehicle traffic every day, is this billboard's strategic benefit. Broadly visible to viewers travelling from Makati, Manila, Calabarzon, Ortigas CBD, and Quezon City. 1,800,962 cars pass by this LED billboard on a monthly average.`,
    },
    {
      link: '/services/led-media-inventories/edsa-paragon-led',
      metaTitle: 'Advertise on EDSA PARAGON LED Billboard | Pioneer LED Billboard in Mandaluyong City',
      metaDescription: 'Advertise at the EDSA PARAGON LED Billboard in Mandaluyong City. Capture thousands of daily commuters on EDSA Northbound with high-impact, high-visibility LED advertising.',
      header: 'Advertise on EDSA PARAGON LED Billboard in Mandaluyong City',
      intro: `Located along EDSA Southbound in the heart of Guadalupe, the EDSA Paragon LED Billboard offers unparalleled exposure to both foot and vehicular traffic daily. This high-impact display reaches travelers from major hubs like Makati, Manila, Calabarzon, Ortigas CBD, and Quezon City. With an average of 1,800,962 vehicles passing by monthly, this billboard is a strategic site for advertisers targeting Metro Manila’s busiest corridor.`,
    },
    {
      link: '/services/led-media-inventories/c5-market-market-led',
      metaTitle: 'Advertise on C5 MARKET! MARKET! LED Billboard | Free Standing LED Billboard in Mckinley',
      metaDescription: 'Advertise at the C5 MARKET! MARKET! LED Billboard in Mckinley. Capture thousands of daily commuters on C5 Taguig with high-impact, high-visibility LED advertising. ',
      header: 'Advertise on C5 MARKET! MARKET! LED Billboard in Mckinley',
      intro: 'The high visibility LED billboard along C5 Taguig, which guarantees a lot of foot and vehicle traffic every day, is this billboard’s strategic benefit. Broadly visible to viewers travelling from Market Market Carpark, C5 Road facing traffic coming from SLEX and BGC area going to Ortigas, Makati CBD, Libis Quezon City.',
    },
    {
      link: '/services/static-fixed-inventories/edsa-northbound-static-billboard',
      metaTitle: 'Advertise on EDSA ORENSE Northbound Static Billboard in Makati',
      metaDescription: `Place an advertisement on Makati City's EDSA ORENSE Northbound Static Billboard and Reach thousands of daily commuters on EDSA Northbound by placing highly effective static ads close to important transportation and commercial hubs.`,
      header: 'Advertise on EDSA ORENSE Northbound Static Billboard in Makati',
      intro: `The EDSA ORENSE Northbound Static Billboard provides commuters and cars heading into Quezon City and Ortigas from Pasay, BGC, and Makati with unparalleled visibility. It draws interest at one of Metro Manila's major congestion zones thanks to its strategic location before Guadalupe Bridge. An average of 1,933,442 cars pass by the region each month, as recorded by this static billboard.`
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-southbound-static-billboard',
      metaTitle: 'Advertise on EDSA MARCALEON (DOUBLE-FACED, SOUTHBOUND) Static Billboard in Mandaluyong',
      metaDescription: `Make the most of your brand's visibility on Nyxsys Philippines' EDSA MARCALEON Double-Faced Static Billboard. With this powerful static billboard in Mandaluyong, you may reach millions of commuters every day on the northbound and southbound lanes of EDSA.`,
      header: 'Advertise on EDSA MARCALEON (DOUBLE-FACED, SOUTHBOUND) Static Billboard in Mandaluyong',
      intro: `The EDSA MARCALEON Double-Faced Static Billboard is well situated along EDSA Mandaluyong to provide both northbound and southbound traffic with enormous brand visibility. This location, which is close to Boni Avenue and Shaw Boulevard, draws a lot of traffic from Makati, Pasay, Quezon City, and Ortigas. This billboard, which has a total monthly vehicle count of over 2 million, is ideal for brands seeking prominent exposure along the main roadway in Metro Manila.`
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-northbound-static-billboard',
      metaTitle: 'Advertise on EDSA MARCALEON (DOUBLE-FACED, NORTHBOUND) Static Billboard in Mandaluyong',
      metaDescription: `Make the most of your brand's visibility on Nyxsys Philippines' EDSA MARCALEON Double-Faced Static Billboard. With this powerful static billboard in Mandaluyong, you may reach millions of commuters every day on the northbound and southbound lanes of EDSA.`,
      header: 'Advertise on EDSA MARCALEON (DOUBLE-FACED, NORTHBOUND) Static Billboard in Mandaluyong',
      intro: `The EDSA MARCALEON Double-Faced Static Billboard is well situated along EDSA Mandaluyong to provide both northbound and southbound traffic with enormous brand visibility. This location, which is close to Boni Avenue and Shaw Boulevard, draws a lot of traffic from Makati, Pasay, Quezon City, and Ortigas. This billboard, which has a total monthly vehicle count of over 2 million, is ideal for brands seeking prominent exposure along the main roadway in Metro Manila.`
    },
    {
      link: '/services/static-fixed-inventories/edsa-orense-parallel-northbound-static-billboard',
      metaTitle: 'Advertise on EDSA ORENSE Parallel Northbound Static Billboard – Nyxsys Philippines',
      metaDescription: `Nyxsys Philippines' EDSA ORENSE Parallel Northbound Static Billboard is a great way to reach everyday commuters. positioned carefully in Makati to optimize visibility along the busy northbound lanes of EDSA.`,
      header: 'Advertise on EDSA ORENSE Parallel Northbound Static Billboard – Nyxsys Philippines',
      intro: `Due to its strategic alignment parallel to the traffic flow, the EDSA ORENSE Parallel Northbound Static Billboard provides your business with extended exposure to northbound drivers traveling toward Ortigas, Quezon City, and northern Metro Manila. This high-visibility position, which is close to Makati's Guadalupe Bridge, draws more than 1.9 million cars each month, making it the perfect place for sustained brand awareness efforts.`
    }
  ]
  
  idealBrandsCampaigns: any[] = [
    {
      link: '/services/led-media-inventories/iconic-edsa-orense-led',
      title: 'Whether you’re launching a new product or increasing brand awareness, this site is perfect for: ',
      objects: [
        {
          title: 'Retail promotions',
          description: 'Flash sales, product launches, and holiday deals'
        },
        {
          title: 'Real estate launches',
          description: 'Showcase new developments and investment opportunities'
        },
        {
          title: 'Branding',
          description: 'Build top-of-mind awareness with a high-impact visual presence'
        },
        {
          title: 'Events and activations',
          description: 'Promote concerts, expos, and lifestyle events'
        },
        {
          title: 'Government and campaigns',
          description: 'Deliver high-visibility public service messages and advisories'
        }
      ]
    },
    {
      link: '/services/led-media-inventories/edsa-paragon-led',
      title: 'This LED billboard is highly effective for: ',
      objects: [
        {
          title: 'Retail & E-Commerce',
          description: 'Announce major promos, sales, and limited-time offers'
        },
        {
          title: 'Real Estate',
          description: 'Highlight pre-sellibng condos or investment properties'
        },
        {
          title: 'Corporate Branding',
          description: 'Build top-of-mind awareness for B2C and B2B brands'
        },
        {
          title: 'Entertainment & Events',
          description: 'Promote festivals, expos, and launches'
        },
        {
          title: 'Public Service & Government Campaigns',
          description: 'Relay important announcements with maximum exposure'
        }
      ]
    },
    {
      link: '/services/led-media-inventories/c5-market-market-led',
      title: 'Perfect for brands aiming to connect with affluent urbanites, professionals, and shoppers: ',
      objects: [
        {
          title: 'Retail promotions',
          description: 'Store openings, payday sales, and seasonal campaigns'
        },
        {
          title: 'Lifestyle and fashion',
          description: 'Trend-forward brands targeting modern consumers',
        },
        {
          title: 'Real estate',
          description: 'Condo projects and mixed-use developments in BGC and Taguig'
        },
        {
          title: 'F&B and leisure',
          description: 'Restaurant launches, food delivery services, and events'
        },
        {
          title: 'Public sector',
          description: 'Awareness drives and announcements with high visibility'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-northbound-static-billboard',
      title: 'This static billboard is ideal for advertising campaigns that need continuous, 24-hour visibility:',
      objects: [
        {
          title: 'Retail Promotions',
          description: 'Declare new locations or significant price reductions'
        },
        {
          title: 'Property Developments',
          description: 'Promote rental opportunities, commercial structures, or condominiums.'
        },
        {
          title: 'Brand Building',
          description: 'Create long-term brand recognition'
        },
        {
          title: 'Event Announcements',
          description: 'Push upcoming expos, concerts, and trade shows'
        },
        {
          title: 'Public Service Messaging',
          description: 'Government or community-based initiatives'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-southbound-static-billboard',
      title: 'This billboard is highly effective for:',
      objects: [
        {
          title: 'Retail & Consumer Products',
          description: 'For sustained promotions and seasonal offers'
        },
        {
          title: 'Real Estate Projects',
          description: 'Pre-selling campaigns for condominiums and residential units'
        },
        {
          title: 'Brand Awareness',
          description: 'For both product-based and corporate branding'
        },
        {
          title: 'Events & Launches',
          description: 'Concerts, exhibits, and pop culture events'
        },
        {
          title: 'Corporate & Government Messaging',
          description: 'Public advisories and awareness drives'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-northbound-static-billboard',
      title: 'This billboard is highly effective for:',
      objects: [
        {
          title: 'Retail & Consumer Products',
          description: 'For sustained promotions and seasonal offers'
        },
        {
          title: 'Real Estate Projects',
          description: 'Pre-selling campaigns for condominiums and residential units'
        },
        {
          title: 'Brand Awareness',
          description: 'For both product-based and corporate branding'
        },
        {
          title: 'Events & Launches',
          description: 'Concerts, exhibits, and pop culture events'
        },
        {
          title: 'Corporate & Government Messaging',
          description: 'Public advisories and awareness drives'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-orense-parallel-northbound-static-billboard',
      title: 'This billboard’s format is ideal for campaigns that demand <b>extended visibility and strong recall</b>, such as:',
      objects: [
        {
          title: 'FMCG & Retail Brands',
          description: 'Weekly promos, new products, or branding campaigns'
        },
        {
          title: 'Real Estate & Automotive',
          description: 'Big-ticket items with long consideration periods'
        },
        {
          title: 'Financial & Tech Services',
          description: 'Build trust through repeated exposure'
        },
        {
          title: 'Corporate Announcements',
          description: 'Mergers, IPOs, milestones'
        },
        {
          title: 'Public Sector Campaigns',
          description: 'Government advisories and public awareness messages'
        }
      ]
    }
  ];

  nearbyLandMarks: any[] = [
    {
      link: '/services/led-media-inventories/iconic-edsa-orense-led',
      title: 'Help audiences locate the billboard easily. The EDSA ICONIC LED is visible near:',
      locations: ['Guadalupe MRT Station', 'Our Lady of Guadalupe Church', 'Rockwell Center', 'Makati City Hall', 'Estrella-Pantaleon Bridge', 'San Carlos Seminary', 'Power Plant Mall (within 5 mins driving distance)']
    },
    {
      link: '/services/led-media-inventories/edsa-paragon-led',
      title: 'To help audiences pinpoint your ad location, the EDSA Paragon LED is visible near:',
      locations: ['Guadalupe MRT Station', 'Our Lady of Guadalupe Church', 'Estrella-Panteleon Bridge', 'Rockwell Center', 'San Carlos Seminary', 'Makati City Hall', 'Power Plant Mall (5 minutes away)']
    },
    {
      link: '/services/led-media-inventories/c5-market-market-led',
      title: `Make it easier for audiences to associate your ad with the area's most recognized destinations:`,
      locations: ['Market! Market!', 'SM Aura Premier', 'Bonifacio High Street', 'BGC Corporate Center', 'C5 Road Interchange', 'STI College Global City', 'Kalayaan Flyover']
    },
    {
      link: '/services/static-fixed-inventories/edsa-northbound-static-billboard',
      title: 'This billboard is easily spotted near key locations:',
      locations: ['Guadalupe MRT Station', 'San Carlos Seminary', 'San Carlos Seminary', 'Rockwell Center', 'Makati City Hall', 'Power Plant Mall (approx. 5 minutes away)', 'Estrella–Pantaleon Bridge']
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-southbound-static-billboard',
      title: 'Your ad will be easily visible near:',
      locations: ['Boni MRT', 'Robinsons Forum', 'Light Mall', 'GA Twin Tower Residences', 'Mandaluyong City Hall', 'Rizal Technological University,', 'Ortigas Center (less than 10 mins drive)']
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-northbound-static-billboard',
      title: 'Your ad will be easily visible near:',
      locations: ['Boni MRT', 'Robinsons Forum', 'Light Mall', 'GA Twin Tower Residences', 'Mandaluyong City Hall', 'Rizal Technological University,', 'Ortigas Center (less than 10 mins drive)']
    },
    {
      link: '/services/static-fixed-inventories/edsa-orense-parallel-northbound-static-billboard',
      title: 'This site is highly visible near major landmarks:',
      locations: ['Guadalupe MRT station', 'San Carlos Seminary', 'Our Lady of Guadalupe Church', 'Rockwell Center', 'Estrella-Pantaleon Bridge', 'Makati City Hall', 'Power Plant Mall (5-10 mins away)']
    }
  ];

  faqs: any[] = [
    {
      link: '/services/led-media-inventories/iconic-edsa-orense-led',
      faqs: [
        {
          question: 'How much does it cost to advertise on the EDSA ICONIC LED?',
          answer: 'Rates vary depending on ad duration, display frequency, and season. Contact us for a customized quote.'
        },
        {
          question: 'What are the ad specs for this LED billboard?',
          answer: 'We accept high-resolution video (MP4) or static images (JPG/PNG). Recommended pixel size: 1500 (H) x 2592 (W) '
        },
        {
          question: 'Can I book a short-term campaign?',
          answer: 'Yes, we offer daily, weekly, and monthly ad slots based on availability.'
        }
      ]
    },
    {
      link: '/services/led-media-inventories/edsa-paragon-led',
      faqs: [
        {
          question: 'How much does it cost to advertise on the EDSA Paragon LED?',
          answer: 'Rates vary based on duration, display time, and campaign frequency. Contact us for a custom quote.',
        },
        {
          question: 'What are the technical specs?',
          answer: 'We accept MP4 videos and high-resolution images (JPG/PNG). Recommended resolution: 1280 (H) x 1120 (W) (<b>Vertical</b>).'
        },
        {
          question: 'Can I book short-term ads?',
          answer: 'Yes, daily, weekly, and monthly slots are available based on schedule and inventory.'
        }
      ]
    },
    {
      link: '/services/led-media-inventories/c5-market-market-led',
      faqs: [
        {
          question: 'How much does it cost to advertise on the C5 Market Market LED?',
          answer: 'Rates depend on the duration and frequency of your campaign. Contact us for a tailored quote.'
        },
        {
          question: 'What file formats do you accept?',
          answer: 'We accept MP4 videos or high-res images (JPG/PNG). Recommended resolution: 576 (H) x 1536 (W) (<b>Landscape</b>). '
        },
        {
          question: 'Is short-term booking available?',
          answer: 'Yes, we offer flexible daily, weekly, and monthly options depending on availability.'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-northbound-static-billboard',
      faqs: [
        {
          question: 'What is the price of advertising on this static billboard?',
          answer: 'The duration of the campaign and the terms of placement affect rates. For a personalized estimate, get in touch with us.'
        },
        {
          question: 'Is this a static or digital billboard?',
          answer: 'This is a static (non-LED) billboard, this one is ideal for constant, unbroken brand exposure.'
        },
        {
          question: 'Can I make short-term reservations?',
          answer: 'Usually, static billboards are reserved for at least one month. Depending on availability, there might be special arrangements possible.'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-southbound-static-billboard',
      faqs: [
        {
          question: 'Is the billboard visible from both sides of EDSA?',
          answer: 'Yes. It’s a double-faced static billboard, giving you exposure to both northbound and southbound traffic.'
        },
        {
          question: 'How long can I book the billboard for?',
          answer: 'Standard bookings range from 1 to 12 months. Custom durations may be arranged upon request.'
        },
        {
          question: 'Are there design or printing requirements?',
          answer: 'Yes. We’ll provide specs and assist with printing and installation. High-resolution artwork is required for optimal output.'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-northbound-static-billboard',
      faqs: [
        {
          question: 'Is the billboard visible from both sides of EDSA?',
          answer: 'Yes. It’s a double-faced static billboard, giving you exposure to both northbound and southbound traffic.'
        },
        {
          question: 'How long can I book the billboard for?',
          answer: 'Standard bookings range from 1 to 12 months. Custom durations may be arranged upon request.'
        },
        {
          question: 'Are there design or printing requirements?',
          answer: 'Yes. We’ll provide specs and assist with printing and installation. High-resolution artwork is required for optimal output.'
        }
      ]
    },
    {
      link: '/services/static-fixed-inventories/edsa-orense-parallel-northbound-static-billboard',
      faqs: [
        {
          question: 'What does “parallel static” mean?',
          answer: 'It means the billboard runs alongside the traffic flow, giving drivers and commuters more time to view your ad.'
        },
        {
          question: 'What are the specs for this billboard?',
          answer: 'The recommended artwork size is based on a 40ft x 60ft format, in high-resolution print-ready file.'
        },
        {
          question: 'How long can I book it for?',
          answer: 'Typical durations are 1–12 months. Special terms may be available for long-term placements.'
        }
      ]
    }
  ]

  maps: any[] = [
    {
      link: '/services/led-media-inventories/iconic-edsa-orense-led',
      fileName: 'https://nyxsys.ph/assets/images/led/led inventories/iconic.png',
      location: 'EDSA Guadalupe, across Guadalupe MRT Station (Southbound)'
    },
    {
      link: '/services/led-media-inventories/edsa-paragon-led',
      fileName: 'https://nyxsys.ph/assets/images/led/led inventories/iconic-2.png',
      location: 'EDSA Guadalupe, directly across Guadalupe MRT Station (Northbound)'
    },
    {
      link: '/services/led-media-inventories/c5-market-market-led',
      fileName: 'https://nyxsys.ph/assets/images/led/led inventories/market market.png',
      location: 'Along C5 Road, beside Market! Market!, Taguig City - Highly visible to both northbound and southbound traffic.'
    },
    {
      link: '/services/static-fixed-inventories/edsa-northbound-static-billboard',
      fileName: 'https://nyxsys.ph/assets/images/static/edsa northbound static billboard.jpg',
      location: 'EDSA corner Orense Street, Makati City — facing northbound traffic before Guadalupe Bridge.'
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-southbound-static-billboard',
      fileName: 'https://nyxsys.ph/assets/images/static/edsa marcaleon double-faced southbound.jpg',
      location: 'EDSA Marcaleon, Mandaluyong City – Near Boni MRT Station (Visible on both sides of EDSA)'
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-northbound-static-billboard',
      fileName: 'https://nyxsys.ph/assets/images/static/edsa marcaleon double-faced northbound.jpg',
      location: 'EDSA Marcaleon, Mandaluyong City – Near Boni MRT Station (Visible on both sides of EDSA)'
    },
    {
      link: '/services/static-fixed-inventories/edsa-orense-parallel-northbound-static-billboard',
      fileName: 'https://nyxsys.ph/assets/images/static/edsa orense parallel.jpg',
      location: 'EDSA corner Orense Street, Makati City – Northbound, parallel to traffic heading to Ortigas and QC'
    }
  ];

  billBoardSpecs: any[] = [
    {
      link: '/services/led-media-inventories/iconic-edsa-orense-led',
      specs:{
        exactAddress: '447 Magsaysay Avenue, Guadalupe Nuevo, Makati City',
        size: '80FT (H) x 140FT (W)',
        orientation: 'Southbound',
        aveMonthlyTraffic: '1,800,962 vehicles',
        source: 'CaltonDatx'
      }
    },
    {
      link: '/services/led-media-inventories/edsa-paragon-led',
      specs:{
        exactAddress: 'Ad wall of Paragon Plaza Bldg, 162 EDSA corner Reliance St., Mandaluyong City',
        size: '70FT (H) x 60FT (W)',
        orientation: 'Northbound',
        aveMonthlyTraffic: '1,933,442 vehicles',
        source: 'CaltonDatx'
      }
    },
    {
      link: '/services/led-media-inventories/c5-market-market-led',
      specs:{
        exactAddress: 'Northbound McKinley Parkway, C5 Taguig, Metro Manila',
        size: '30FT (H) x 80FT (W',
        orientation: 'Northbound',
        aveMonthlyTraffic: '238,695 vehicles',
        source: 'MMDA 2023'
      }
    },
    {
      link: '/services/static-fixed-inventories/edsa-northbound-static-billboard',
      specs: {
        exactAddress: 'EDSA corner Orense Street, Makati City',
        size: '90ft (H) x 70ft (W)',
        type: 'Static',
        orientation: 'Northbound (facing traffic from Makati to QC)',
        aveMonthlyTraffic: '1,933,442 vehicles',
        source: 'CaltonDatx'
      }
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-southbound-static-billboard',
      specs: {
        exactAddress: 'Along EDSA, Brgy. Marcaleon, Mandaluyong City (near Boni MRT Station)',
        size: '80FT (H) x 70FT (W) per face',
        type: 'Static – Double-Faced (visible from both directions)',
        orientation: `
          <ul>
            <li><b>Face 1:</b> Southbound – Facing Quezon City to Makati</li>
            <li><b>Face 2:</b> Northbound – Facing Makati to Quezon City</li>
          </ul>
        `,
        aveMonthlyTraffic: '1,933,442 vehicles',
        source: 'CaltonDatx'
      },
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-northbound-static-billboard',
      specs: {
        exactAddress: 'Along EDSA, Brgy. Marcaleon, Mandaluyong City (near Boni MRT Station)',
        size: '80FT (H) x 70FT (W) per face',
        type: 'Static – Double-Faced (visible from both directions)',
        orientation: `
          <ul>
            <li><b>Face 1:</b> Southbound – Facing Quezon City to Makati</li>
            <li><b>Face 2:</b> Northbound – Facing Makati to Quezon City</li>
          </ul>
        `,
        aveMonthlyTraffic: '1,933,442 vehicles',
        source: 'CaltonDatx'
      },
    },
    {
      link: '/services/static-fixed-inventories/edsa-orense-parallel-northbound-static-billboard',
      specs: {
        exactAddress: 'EDSA corner Orense Street, Barangay Guadalupe Nuevo, Makati City',
        size: '30FT (H) x 75FT (W)',
        type: 'Static – Parallel Orientation',
        orientation: 'Northbound – Parallel to traffic heading to Ortigas, QC, and Caloocan',
        aveMonthlyTraffic: '1,933,442 vehicles',
        source: 'CaltonDatx'
      }
    }
  ];

  booking: any[] = [
    {
      link: '/services/led-media-inventories/iconic-edsa-orense-led',
      description: `Get competitive advertising rates for the <b>EDSA ICONIC LED</b> today. Whether you're a startup or a major brand, we offer flexible packages to meet your campaign goals and budget.`,
      contactUs: this.sanitizer.bypassSecurityTrustHtml('<a style="color: #fff;" href="/contact">Contact Us</a> or <a style="color: #fff;" href="/contact">Request a Qoute</a> to get started.')
    },
    {
      link: '/services/led-media-inventories/edsa-paragon-led',
      description: 'Get affordable, flexible advertising packages for the <b>EDSA Paragon LED Billboard</b>. Whether you’re a startup or a multinational brand, we can customize a solution that suits your budget and campaign timeline. ',
      contactUs: this.sanitizer.bypassSecurityTrustHtml(`<a style="color: #fff;" href="/contact">Contact Us</a> or <a style="color: #fff;" href="/contact">Request a Qoute</a> to get started.`)
    },
    {
      link: '/services/led-media-inventories/c5-market-market-led',
      description: `Whether you're a startup aiming for regional presence or a national brand looking to dominate, we offer <b>flexible packages</b> for short- or long-term runs.`,
      contactUs: this.sanitizer.bypassSecurityTrustHtml(`<a style="color: #fff;" href="/contact">Contact Us</a> today for customized rates and media planning.`)
    },
    {
      link: '/services/static-fixed-inventories/edsa-northbound-static-billboard',
      description: 'Take advantage of affordable prices for sustained exposure with this static billboard. We provide numerous scheduling choices to fit your campaign goals and budget, regardless of your size.',
      contactUs: this.sanitizer.bypassSecurityTrustHtml(`<a style="color: #fff;" href="/contact">Contact Us</a> today for pricing and availability.`),
      startCampaign: 'Bold message. 24/7 visibility. Prime commuter location'
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-southbound-static-billboard',
      description: 'Secure your billboard space on this <b>prime double-faced static site</b>. Nyxsys Philippines offers competitive rates, long-term value, and flexible package options for all types of brands and advertisers.',
      contactUs: this.sanitizer.bypassSecurityTrustHtml(`<a style="color: #fff;" href="/contact">Contact Nyxsys Philippines</a> today to get a tailored quote and campaign plan.`),
      startCampaign: 'Two faces. One strategic location. Endless branding opportunities.'
    },
    {
      link: '/services/static-fixed-inventories/edsa-marcaleon-northbound-static-billboard',
      description: 'Secure your billboard space on this <b>prime double-faced static site</b>. Nyxsys Philippines offers competitive rates, long-term value, and flexible package options for all types of brands and advertisers.',
      contactUs: this.sanitizer.bypassSecurityTrustHtml(`<a style="color: #fff;" href="/contact">Contact Nyxsys Philippines</a> today to get a tailored quote and campaign plan.`),
      startCampaign: 'Two faces. One strategic location. Endless branding opportunities.'
    },
    {
      link: '/services/static-fixed-inventories/edsa-orense-parallel-northbound-static-billboard',
      description: 'Nyxsys Philippines offers flexible advertising packages to suit both emerging and established brands. Enjoy high-return exposure in one of EDSA’s most effective northbound static placements.',
      contactUs: this.sanitizer.bypassSecurityTrustHtml(`<a style="color: #fff;" href="/contact">Contact Nyxsys Philippines</a> today to get a tailored rate and availability.`),
      startCampaign: 'Long exposure. Daily traffic. High-recall value.'
    }
  ];
  
  constructor(private utils: UtilityService, private router: Router, private sanitizer: DomSanitizer) {
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

    this.utils.setPageTitle(this.selectedMeta().metaTitle);

    this.utils.setMetaUpdateTag('title', this.selectedMeta().metaTitle);
    this.utils.setMetaUpdateTag(
      'description',
      this.selectedMeta().metaDescription
    )
    
    // OG Meta
    this.utils.setMetaPropertyTag('og:title', this.selectedMeta().metaTitle);
    this.utils.setMetaPropertyTag('og:description', 
      this.selectedMeta().metaDescription
    );
    this.utils.setMetaPropertyTag('og:url', `https://nyxsys.ph${this.selectedMeta().link}`);

    // Twitter Meta
    this.utils.setMetaUpdateTag('twitter:title', this.selectedMeta().metaTitle)
    this.utils.setMetaUpdateTag(
      'twitter:description',
      this.selectedMeta().metaDescription
    )
  }

  filterRoute = (object: any) => object.link === this.router.url; 

  selectedIdealBrands = () => this.idealBrandsCampaigns.filter(item => this.filterRoute(item))[0] || [];
  selectedLandMarks = () => this.nearbyLandMarks.filter(item => this.filterRoute(item))[0] || [];
  selectedFaqs = () => this.faqs.filter(item => this.filterRoute(item))[0] || [];
  selectedMap = () => this.maps.filter(item => this.filterRoute(item))[0] || [];
  selectedSpecs = () => this.billBoardSpecs.filter(item => this.filterRoute(item))[0] || [];
  selectedAds = () => this.whyAdvertise.filter(item => this.filterRoute(item))[0] || [];
  selectedBooking = () => this.booking.filter(item => this.filterRoute(item))[0] || []
  selectedMeta = () => this.meta.filter(item => this.filterRoute(item))[0] || []
}
