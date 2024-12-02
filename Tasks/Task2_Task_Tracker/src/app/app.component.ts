import { Component, NgModule } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-list';
  tasks: Task[] = [];
  idInput = null
  taskInput: string = '';

  i  = null ;

  submitTask() {
    if (this.taskInput.trim()) {
      this.tasks.push({
        id: Number(this.idInput) , name: this.taskInput,
        completed: false
      });

    }
  }

  taskstatus:string = 'pending'
  donetask(i: number) {
    this.taskstatus = 'Done';
    console.log({i});
  }


  // removeTask(index: number) {
  //   this.tasks.splice(index);
  // }




}
