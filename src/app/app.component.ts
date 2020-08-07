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
  spaceData: Space[];
  backendService: BackendService;
  isYearSelected: boolean = false;
  isLaunchSelected: boolean = false;
  isLandingSelected: boolean = false;
  year: string;
  launched: string;
  landed: string;
  constructor(service: BackendService) {
    this.backendService = service;
  }

  ngOnInit() {
    this.isYearSelected = false;
    this.isLandingSelected = false;
    this.isLaunchSelected = false;
    this.year = null;
    this.launched = null;
    this.landed = null;
    this.callFirst();
  }

  private callFirst() {
    this.backendService.loadData().subscribe(s => {
      this.spaceData = s;
      console.log(this.spaceData[0].rocket.first_stage.cores[0].land_success);
    });
  }

  public yearFilter(given) {
    this.isYearSelected = !this.isYearSelected;
    this.year = given;
    if (this.isYearSelected == false) {
      this.year = null;
    }
    this.backendService.getData(this.launched, this.landed, this.year).subscribe(s => {
      this.spaceData = s;
    });
  }

  public launchFilter(given) {
    this.isLaunchSelected = !this.isLaunchSelected;
    this.launched = given;
    if (this.isLaunchSelected == false) {
      this.launched = null;
    }
    this.backendService.getData(this.launched, this.landed, this.year).subscribe(s => {
      this.spaceData = s;
    });
  }

  public landFilter(given) {
    this.isLandingSelected = !this.isLandingSelected;
    this.landed = given;
    if (this.isLandingSelected == false) {
      this.landed = null;
    }
    this.backendService.getData(this.launched, this.landed, this.year).subscribe(s => {
      this.spaceData = s;
    });
  }
}
