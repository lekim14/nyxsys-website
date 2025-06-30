import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from "../../modules/components/components.module";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { UtilityService } from '../../services/utility.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [NavbarComponent, ComponentsModule, FooterComponent],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss'
})
export class ThankYouComponent implements OnInit {

  constructor(private utils: UtilityService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        utils.setCanonicalURL()
      }
    })
  }

  ngOnInit(): void {
    this.utils.setPageTitle('Thank You For Reaching Out! | Nyxsys Philippines Inc. | Official Site | DOOH Advertising');
    
    this.utils.setMetaUpdateTag('title', 'Thank You For Reaching Out! | Nyxsys Philippines Inc. | Official Site | DOOH Advertising',);
    this.utils.setMetaUpdateTag(
      'description',
      "Nyxsys Philippines is a premier provider of Digital Out-of-Home (DOOH) media and business technology solutions. From LED billboards to audience measurement."
    )
  }

}
