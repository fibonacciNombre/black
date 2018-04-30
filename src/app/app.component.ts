import { Component, OnInit } from '@angular/core';
import { ArchiveBusiness } from './app.archive.business';
import { Archive } from './archive';

import { Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArchiveBusiness]
})
export class AppComponent implements OnInit{
  title = 'Prometheus';
  type = 'info';
  typeTittle = 'success'
  archives: Archive[] = [];

  constructor(
    private archiveBusiness: ArchiveBusiness,
    private spinnerService: Ng4LoadingSpinnerService 
  ) {
  }

  public ngOnInit() {
    this.spinnerService.show();
    this.archiveBusiness
      .getAllTodos()
      .subscribe(
        (archives) => {
          this.archives = archives;
          this.spinnerService.hide();
        }
      );
  }
}
