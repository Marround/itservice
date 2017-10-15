/**
 * Created by Marround on 10.10.2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {
  MatTabsModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatMenuModule,
  MatGridListModule, MatListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {List1Component} from './list1/list1.component';
import {List2Component} from './list2/list2.component';

@NgModule({
  imports: [CommonModule, MatListModule, BrowserAnimationsModule],
  declarations: [List1Component, List2Component],
  exports: [List1Component, List2Component]
})

export class ListsModule {

}
