import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_Binding';

  username:string = "Anurag";

  num1:number = 20;

  login(){
    alert("you clicked!")
  }
  num2:number = 50;

  task1 = "";
  onInputChange(event: Event): void{
    const inputelement = event.target as HTMLInputElement;
    this.task1 = inputelement.value;
  }

  task2="";
}
