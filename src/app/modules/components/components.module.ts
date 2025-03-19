import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { DrivingForceSectionComponent } from '../../components/driving-force-section/driving-force-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';
import { GallerySectionComponent } from '../../components/gallery-section/gallery-section.component';
import { WhyChooseUsSectionComponent } from '../../components/why-choose-us-section/why-choose-us-section.component';
import { SeeMoreServicesSectionComponent } from '../../components/see-more-services-section/see-more-services-section.component';
import { NumberCountingComponent } from '../../components/number-counting/number-counting.component';
import { ContactUsSectionComponent } from '../../components/contact-us-section/contact-us-section.component';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';
import { AudienceTestimonialsComponent } from '../../components/audience-testimonials/audience-testimonials.component';
import { TestimonialsCardComponent } from '../../components/testimonials-card/testimonials-card.component';
import { ScrollToTopBtnComponent } from '../../components/scroll-to-top-btn/scroll-to-top-btn.component';

const COMPONENT_MODULES = [
  CommonModule,
  NavbarComponent,
  AboutSectionComponent,
  DrivingForceSectionComponent,
  ServicesSectionComponent,
  CompaniesComponent,
  AudienceTestimonialsComponent,
  TestimonialsComponent,
  TestimonialsCardComponent,
  CallToActionComponent,
  FooterComponent,
  GallerySectionComponent,
  WhyChooseUsSectionComponent,
  SeeMoreServicesSectionComponent,
  NumberCountingComponent,
  ContactUsSectionComponent,
  BlogCardComponent,
  ScrollToTopBtnComponent,
]
@NgModule({
  declarations: [],
  imports: [ ...COMPONENT_MODULES ],
  exports: [ ...COMPONENT_MODULES ],
})
export class ComponentsModule { }
