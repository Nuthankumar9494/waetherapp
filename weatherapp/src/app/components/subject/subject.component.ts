import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from 'src/app/services/weatherdata.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private subject:WeatherdataService) { }
   behaviour:any;
  ngOnInit(): void {
    this.subject.objsubject.subscribe(data=>{
      this.behaviour=data;
    })
  }
  

}
