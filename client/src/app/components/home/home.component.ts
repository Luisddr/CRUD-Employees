import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees';
import {EmployeesService} from '../../services/employees.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeesList: any = []

  constructor(private employeesService : EmployeesService) { }

  ngOnInit(): void {

    this.employeesService.getEmployees().subscribe(
      res => this.employeesList = res,
      err=> console.error(err)
    )
  }

  getEmployees(){
    this.employeesService.getEmployees().subscribe(
      res => this.employeesList = res,
      err=> console.error(err)
    )
  }

  deleteEmployee(id:number){
    this.employeesService.deleteEmployee(id).subscribe(
      res=>{console.log(res);
      this.getEmployees();
      },
      err=>console.error(err)
    )
  }

}
