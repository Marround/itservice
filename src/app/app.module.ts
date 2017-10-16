import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MenuComponent} from './appmenu/menu.component';
import {MatButtonModule, MatIconModule, MatGridListModule} from '@angular/material';
import {SectionsModule, routs} from './sections/index';
import { AppfooterComponent } from './appfooter/appfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AppfooterComponent
  ],
  imports: [
    BrowserModule,
    SectionsModule,
    RouterModule.forRoot(routs),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
