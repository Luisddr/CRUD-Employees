import { Component, OnInit } from '@angular/core';
import { Cargo, Employee } from 'src/app/models/employees';
import { EmployeesService } from 'src/app/services/employees.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  positionsList: any = [];
  employee: Employee = {
    name: '',
    birthday: '',
    age: 0,
    status: true,
    cargo: ''
  }

  constructor(private positionService : EmployeesService) { }

  ngOnInit(): void {

    this.positionService.getPositions().subscribe(
      res => this.positionsList = res,
      err=> console.error(err)
    )
  }

  saveEmployee(){
    this.positionService.postEmployees(this.employee).subscribe(
      res=> {console.log(res);
      },
      err=>console.error(err)
    )
  }

}
