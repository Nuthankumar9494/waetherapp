import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherdataService } from 'src/app/services/weatherdata.service';

@Component({
  selector: 'app-weatherdisplay',
  templateUrl: './weatherdisplay.component.html',
  styleUrls: ['./weatherdisplay.component.css']
})
export class WeatherdisplayComponent implements OnInit {
  results:any='';
  isloading=true;
 
  constructor(private http:HttpClient,private service:WeatherdataService) { }

  ngOnInit(): void {
   this.service.objsubject.subscribe(data=>{
    console.log(data);
   })
  
  }
 
   data(data:any){
    console.log(data.value);
  
    // getdata():Observable<any>{
         this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.value}&appid=943740fd96e7e9c2844f0cf8fd80fd54`).subscribe(data1=>{
          this.results=data1;
          this.isloading=false;
         },(error)=>{
          console.log(error)
         });
    //  }
   } 
   passsubject(data:any){
   this.service.senddata(data.value);
   }

}
