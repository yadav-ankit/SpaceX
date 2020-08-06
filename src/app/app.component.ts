import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { Space } from './main/space';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX';
  spaceData : Space[];
  backendService: BackendService;
  constructor(service: BackendService) {
    this.backendService = service;
  }

  ngOnInit() {
    this.callFirst();
  }

  private callFirst() {
    this.backendService.getData().subscribe(s => {
      this.spaceData = s;
      console.log(this.spaceData[0]);
      console.log(this.spaceData[0].flight_number);
      console.log(this.spaceData[0].tentative_max_precision);
      console.log(this.spaceData[0].launch_failure_details);
    });
  }
}
