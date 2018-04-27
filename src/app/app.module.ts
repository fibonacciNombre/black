import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from './app.service';
import { ArchiveBusiness } from './app.archive.business';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [ArchiveBusiness,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
