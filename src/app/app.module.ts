import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PosesComponent } from './components/poses/poses.component';
import { PoseDetailComponent } from './components/pose-detail/pose-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { PoseSearchComponent } from './components/pose-search/pose-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PosesComponent,
    PoseDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NavComponent,
    PoseSearchComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
