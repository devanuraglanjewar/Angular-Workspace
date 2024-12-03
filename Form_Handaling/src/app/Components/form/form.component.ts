import { Component } from '@angular/core';
import { Student } from  './form.students'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  inputRoll:any = null;
  inputName: string= '';
  inputAge:any = null;

  students: Student[] = [];

  submitForm(){
    if (this.inputRoll && this.inputName && this.inputAge) {
      const newStudent: Student = {
        rollNo: this.inputRoll,
        name: this.inputName,
        age: this.inputAge,
      };

      // Add the new student to the students array
      this.students.push(newStudent);

      // Reset the form inputs
      this.resetForm();
    } else {
      alert('Please fill out all fields.');
    }
  }
  resetForm() {
    this.inputRoll = null;
    this.inputName = '';
    this.inputAge = null;
  }

}
