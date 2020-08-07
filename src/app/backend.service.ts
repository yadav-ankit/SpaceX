import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Space } from './main/space';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiURL: string = 'https://api.spacexdata.com/v3/launches?limit=10';

constructor(private http:HttpClient) {}

public loadData(){
  return this.http.get<Space[]>(this.apiURL);
}

public getData (launch_success? : string, land_success?: string,launch_year? : string ) {
    
if(isNullOrUndefined(launch_success) && isNullOrUndefined(land_success)){
  return this.http.get<Space[]>(this.apiURL + '&launch_success=true&land_success=true&launch_year=' + launch_year);
}
  if(!isNullOrUndefined(launch_success)){
    return this.http.get<Space[]>(this.apiURL + '&launch_success=' + launch_success);
  }else if(land_success != undefined){
    return this.http.get<Space[]>(this.apiURL + '&launch_success=true' + '&land_success=' + land_success);
  }else if(isNullOrUndefined(launch_year)){
    return this.http.get<Space[]>(this.apiURL + '&launch_success=true&land_success=true');
  }
 
}

}
