import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {
  // city:any='Hyderabad';
  public objsubject = new BehaviorSubject<string>('greetings you won');
  constructor(private http:HttpClient) { }
  // getdata():Observable<any>{
  //   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=943740fd96e7e9c2844f0cf8fd80fd54`);
  // }
 senddata(data:any){
  this.objsubject.next(data);
 }
}
