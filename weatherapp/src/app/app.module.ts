import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherdisplayComponent } from './components/weatherdisplay/weatherdisplay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { WeatherPipe } from './weather.pipe';
import { KilometercPipe } from './kilometerc.pipe';
import { LoaderComponent } from './loader/loader.component';
import { SubjectComponent } from './components/subject/subject.component';
import { WeatherdataService } from './services/weatherdata.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherdisplayComponent,
    WeatherPipe,
    KilometercPipe,
    LoaderComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
