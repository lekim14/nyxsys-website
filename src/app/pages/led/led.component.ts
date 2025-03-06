import { Component, OnInit } from "@angular/core";
import { MaterialUiModule } from "../../modules/material-ui/material-ui.module";
import { ComponentsModule } from "../../modules/components/components.module";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Meta, Title } from "@angular/platform-browser";

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
      image: "assets/images/led/led inventories/iconic-2.png"
    },
    { 
      text: "EDSA PARAGON LED (NORTHBOUND)",
      address: "Ad wall of Paragon Plaza Bldg, 162 EDSA corner Reliance St., Mandaluyong City",
      size: "70FT (H) x 60FT (W)",
      image: "assets/images/led/led inventories/paragon.png"
    },
    { 
      text: "C5 MARKET MARKET LED (NORTHBOUND)",
      address: "447 Magsaysay Avenue, Guadalupe Nuevo, Makati City 80FT",
      size: "30FT (H) x 80FT (W)",
      image: "assets/images/led/led inventories/market market.png"
    },
  ]

  mallPosterboxes: any[] = [
    {
      text: "Glorietta",
      items: [
        { text: "Glorietta, Entrance in front of Landmark", image: "assets/images/led/mall posterboxes/glorietta/Glorietta, Entrance in front of Landmark.png" },
        { text: "Glorietta 1 Entrance in front of SM", image: "assets/images/led/mall posterboxes/glorietta/Glorietta 1, Entrance in front of SM.jpg" },
        { text: "Glorietta 1, Near True Value", image: "assets/images/led/mall posterboxes/glorietta/Glorietta 1, Near True Value.png" },
        { text: "Glorietta 2, Ground fl. Entrance near Holiday Inn", image: "assets/images/led/mall posterboxes/glorietta/Glorietta 2, Ground fl. Entrance near Holiday Inn.png" },
        { text: "Glorietta 3 Drop-off, in front of Steel Parking", image: "assets/images/led/mall posterboxes/glorietta/Glorietta 3 Drop-off, in front of Steel Parking.png" },
        { text: "Glorietta 4, Drop-off Entrance", image: "assets/images/led/mall posterboxes/glorietta/Glorietta 4, Drop-off Entrance.png" },
        { text: "Glorietta 4, Near Activity Center", image: "assets/images/led/mall posterboxes/glorietta/Glorietta 4, Near Activity Center.png" },
        { text: "Glorietta 4, 2nd fl. beside Havaianas", image: "assets/images/led/mall posterboxes/glorietta/Glorietta 4, 2nd fl. beside Havaianas.jpg" },
        { text: "Glorietta 4, Activity Center, Beside Mcdonalds", image: "assets/images/led/mall posterboxes/glorietta/Glorietta 4, Activity Center, Beside Mcdonalds.jpg" },
      ]
    }, 
    {
      text: "UP Town Center",
      items: [
        { text: "Phase 1 Building in front of Mercado Supermarket", image: "assets/images/led/mall posterboxes/uptown center/Phase 1 Building in front of Mercado Supermarket.png" },
        { text: "Phase 1 Building in front of National Bookstore", image: "assets/images/led/mall posterboxes/uptown center/Phase 1 Building in front of National Bookstore.jpg" },
        { text: "Phase 1 Building exit beside Pepper Lunch", image: "assets/images/led/mall posterboxes/uptown center/Phase 1 Building exit beside Pepper Lunch.png" },
        { text: "Phase 1 Building, 2nd flr. beside Sbarro", image: "assets/images/led/mall posterboxes/uptown center/Phase 1 Building, 2nd flr. beside Sbarro.png" },
        { text: "Phase 2 Building 2F in front of Dotonbori", image: "assets/images/led/mall posterboxes/uptown center/Phase 2 Building 2F in front of Dotonbori.jpg" },
        { text: "Phase 2 Building entrance near Uniqlo", image: "assets/images/led/mall posterboxes/uptown center/Phase 2 Building entrance near Uniqlo.png" },
      ]
    },
    {
      text: "Trinoma",
      items: [
        { text: "Ground Level, North Car Park Drop Off", image: "assets/images/led/mall posterboxes/trinoma/Ground Level, North Car Park Drop Off.jpg" },
        { text: "Level 1, Activity Center near Mister Donut", image: "assets/images/led/mall posterboxes/trinoma/Level 1, Activity Center near Mister Donut.jpg" },
        { text: "Level 2, Near Shoe Salon", image: "assets/images/led/mall posterboxes/trinoma/Level 2, Near Shoe Salon.png" },
        { text: "Level 2, Entrance near Bench Fix", image: "assets/images/led/mall posterboxes/trinoma/Level 2, Entrance near Bench Fix.jpg" },
        { text: "Level 2, Food Choices 1", image: "assets/images/led/mall posterboxes/trinoma/Level 2, Food Choices 1.jpg" },
        { text: "Level 2, Food Choices 2", image: "assets/images/led/mall posterboxes/trinoma/Level 2, Food Choices 2.jpg" },
        { text: "Level 3, Near Irvins", image: "assets/images/led/mall posterboxes/trinoma/Level 3, Near Irvins.jpg" },
      ]
    },
    {
      text: "Market Market",
      items: [
        { text: "Ground Floor beside elevator in front of National Bookstore", image: "assets/images/led/mall posterboxes/market market/Ground Flr. beside elevator in front of National Bookstore.png" },
        { text: "1st floor Activity Center in front of Levi's", image: "assets/images/led/mall posterboxes/market market/1st floor Activity Center in front of Levi's.jpg" },
        { text: "2nd Floor in front of MoshiKoshi", image: "assets/images/led/mall posterboxes/market market/2nd Floor in front of MoshiKoshi.jpg" },
        { text: "Drop-off, Entrance from Terminal", image: "assets/images/led/mall posterboxes/market market/Drop-off Entrance from Terminal.png" },
      ]
    }
  ]

  
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    const elements = document.querySelectorAll(".led-item");      
    
    elements.forEach((element, index) => {  
      setTimeout(() => (this.isVisible[index] = true), index * 300);
    });
  
  
    this.title.setTitle('LED Media & Static Fixed Inventory Management - Indoor, Outdoor & Digital Advertising Solutions');

    this.meta.updateTag({
      name: 'title',
      content: 'LED Media & Static Fixed Inventory Management - Indoor, Outdoor & Digital Advertising Solutions'
    });

    this.meta.updateTag({
      name: 'description',
      content: 'Efficiently manage LED media and static fixed inventories with our advanced digital advertising solutions. We specialize in LED screen inventory, indoor and outdoor digital media, and digital billboard management, ensuring optimized tracking and usage of both static and dynamic advertising spaces.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'LED Media Inventory Management, Digital Advertising Inventory, Static Display Advertising, Fixed Media Solutions, LED Screen Inventory, Outdoor Digital Media, Fixed Location Advertising, Digital Billboard Management, Static Advertising Inventory, Media Inventory Solutions, Outdoor LED Displays, Digital Display Inventory Tracking'
    });


    // Update OpenGraph Meta
    this.meta.updateTag({
      property: 'og:title',
      content: 'LED Media & Static Fixed Inventory Management - Indoor, Outdoor & Digital Advertising Solutions'
    });
    
    this.meta.updateTag({
      property: 'og:description',
      content: 'Efficiently manage LED media and static fixed inventories with our advanced digital advertising solutions. We specialize in LED screen inventory, indoor and outdoor digital media, and digital billboard management, ensuring optimized tracking and usage of both static and dynamic advertising spaces.'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://nyxsys.ph/assets/images/nyxsys-logo-loading.png'
    });
    
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://nyxsys.ph/services/led-media-inventories'
    });

  }
}
