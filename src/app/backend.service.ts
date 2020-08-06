import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiURL: string = 'https://api.spacexdata.com/v3/launches?limit=100';

constructor(private http:HttpClient) {}


public getData () {
    return this.http.get(this.apiURL);
}

}
