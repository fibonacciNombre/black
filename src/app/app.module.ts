import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

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
    HttpClientModule,
    Ng4LoadingSpinnerModule,
    NgbModule.forRoot()
  ],
  providers: [ArchiveBusiness,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
