import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'understand_pipes';

  // Define the employee object with properties for name, email, and department
  employee = {
    empId: 0, // Allow empId to be null
    firstName: '',
    lastName: '',
    gender:  '',
    dob:   ''
  };

  empList: {empId:number,firstName: string,lastName:string,gender:string,dob:string}[]=
  [ {empId: 101, firstName: 'John', lastName: 'Doe', gender: 'Male', dob: '1990-01-15' },
    { empId: 102, firstName: 'Jane', lastName: 'Smith', gender: 'Female', dob: '1988-05-22' },
    { empId: 103, firstName: 'Robert', lastName: 'Brown', gender: 'Male', dob: '1992-03-18' }
  ];
  saveEmployee() {
    if (this.employee.empId !== null && this.employee.firstName !== '' && this.employee.lastName !== '' && this.employee.gender !== '' && this.employee.dob !== '') {
      this.empList.push({ ...this.employee });
      console.log(this.empList)

      this.resetForm();
    } else {
      alert("Fill complete data");
    }
  }

  // Method to reset the form fields
  resetForm() {
    this.employee = {
      empId: 0,
      firstName: '',
      lastName: '',
      gender:'',
      dob:''
    };
  }
}
