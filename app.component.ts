import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  {
  title = 'sprint-project';
  


  checkLoginDetails(){
    console.log("logged in");
  }
 
  
}
