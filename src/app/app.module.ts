import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RedditService } from './reddit.service';
import { RallComponent } from './rall/rall.component';
import { JsonpModule } from '@angular/http';
import { RfunnyComponent } from './rfunny/rfunny.component';
import { RawwComponent } from './raww/raww.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RallComponent,
    RfunnyComponent,
    RawwComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
