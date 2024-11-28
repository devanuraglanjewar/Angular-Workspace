import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  Display:Boolean = true;
  Display2:Boolean = true;

  changeapper(){
    this.Display =! this.Display;
  }

  s:string= "show";
  change2(){
    this.s = this.s == "show" ? "hide" : "show";
    this.Display2 =! this.Display2;
  }

  data = [1,2,3,4,5,6];

  students =[
    {id:1,name:"John",age:20,marks:[65,55,48]},
    {id:2,name:"Jane",age:21,marks:[65,55,48]},
    {id:3,name:"Bob",age:22,marks:[65,55,48]},
    {id:4,name:"Alice",age:23,marks:[65,55,48]},
    {id:5,name:"Mike",age:24,marks:[65,55,48]}
  ]

  value = ;

}

