import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Space } from './main/space';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiURL: string = 'https://api.spacexdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient) { }

  public loadData() {
    return this.http.get<Space[]>(this.apiURL);
  }

  public getData(launch_success?: string, land_success?: string, launch_year?: string) {
    let url = this.apiURL;
    if (!isNullOrUndefined(launch_success)) {
      url = url + '&launch_success=' + launch_success;
    }
    if (!isNullOrUndefined(land_success)) {
      url = url + '&land_success=' + land_success;
    }
    if (!isNullOrUndefined(launch_year)) {
      url = url + '&launch_year=' + launch_year;
    }
    return this.http.get<Space[]>(url);

  }

}
