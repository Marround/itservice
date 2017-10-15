import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatGridListModule} from '@angular/material';

import { HomeSectionComponent } from './home/home.component';
import { PricelistSectionComponent} from './pricelist/pricelist.component';
import { AboutusSectionComponent } from './aboutus/aboutus.component';
import { ContactsSectionComponent } from './contacts/contacts.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatGridListModule],
  declarations: [HomeSectionComponent, PricelistSectionComponent, AboutusSectionComponent, ContactsSectionComponent],
  exports: [HomeSectionComponent, PricelistSectionComponent, AboutusSectionComponent, ContactsSectionComponent]
})

export class SectionsModule {

}
