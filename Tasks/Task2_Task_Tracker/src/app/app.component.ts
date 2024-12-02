import { Component, NgModule } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-list';
  tasks:Task[] = [];
  idInput = null
  taskInput: string = '';


  i  = null ;

  submitTask() {
    if (this.taskInput.trim()) {const taskId = Number(this.idInput);

      // Check if the ID already exists in the tasks array
      const existingTask = this.tasks.find(task => task.id === taskId);

      if (existingTask) {
        // Show an alert if the ID already exists
        alert(`Task with ID ${taskId} already exists.`);
      } else {
        // If the ID doesn't exist, add the new task
        this.tasks.push({
          id: taskId,
          name: this.taskInput,
          completed: false
        });
      }
    }
  }

  taskstatus:string = 'pending'
  donetask(i: number) {
    if(this.tasks[i]){
      this.tasks[i].completed = true;
    console.log({i});
    }
  }


  removeTask(i:number) {
    this.tasks.splice(i,1);
    console.log({i});
  }




}
