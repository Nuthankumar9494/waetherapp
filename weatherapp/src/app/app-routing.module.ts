import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { SubjectComponent } from './components/subject/subject.component';
import { WeatherdisplayComponent } from './components/weatherdisplay/weatherdisplay.component';

const routes: Routes = [{path:'',component:WeatherdisplayComponent},{path:'Subject',component:SubjectComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
