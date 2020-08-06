import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX';
  someVar;
  backendService: BackendService;
  constructor(service: BackendService) {
    this.backendService = service;
  }

  ngOnInit() {
    this.callFirst();
  }

  private callFirst() {
    this.backendService.getData().subscribe(s => this.someVar = s);
  }
}
