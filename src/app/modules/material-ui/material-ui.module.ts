import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider'
import { MatSelectModule } from '@angular/material/select';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha';

const MATERIAL_UI_MODULES = [
  CommonModule,
  SlickCarouselModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  FormsModule,
  MatExpansionModule,
  MatCardModule,
  MatTooltipModule,
  RecaptchaModule,
  RecaptchaFormsModule,
  RecaptchaV3Module,
  MatDividerModule,
  MatSelectModule,
]

@NgModule({
  declarations: [],
  imports: [ ...MATERIAL_UI_MODULES ],
  exports: [ ...MATERIAL_UI_MODULES ],
})
export class MaterialUiModule { }
