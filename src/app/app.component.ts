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
    this.backendService.loadData().subscribe(s => {
      this.spaceData = s;
      console.log(this.spaceData[0].rocket.first_stage.cores[0].land_success);
    });
  }

  public yearFilter(given){
    this.backendService.getData(undefined,undefined,given).subscribe(s => {
      this.spaceData = s;
    });
  }

  public launchFilter(given){
    this.backendService.getData(given,undefined,undefined).subscribe(s => {
      this.spaceData = s;
    });
  }

  public landFilter(given){
    this.backendService.getData(undefined,given,undefined).subscribe(s => {
      this.spaceData = s;
    });
  }
}
