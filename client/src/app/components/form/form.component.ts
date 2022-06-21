import { Component, OnInit } from '@angular/core';
import { Cargo, Employee } from 'src/app/models/employees';
import { EmployeesService } from 'src/app/services/employees.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  positionsList: any = [];
  employee: any | Employee = {
    name: '',
    birthday: '',
    age: 0,
    status: "",
    cargo: ''
  }

  upDate: boolean = false

  constructor(private positionService : EmployeesService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.positionService.getPositions().subscribe(
      res => this.positionsList = res,
      err=> console.error(err)
    )

   const params = this.activatedRoute.snapshot.params;
   if(params['id']){
    this.positionService.getEmployeeById(params['id'])
    .subscribe(
      res =>{
        console.log(res)
        this.employee = res;
        this.upDate = true
      },
      err => console.error(err)
    )
   }
  }

  saveEmployee(){
    this.positionService.postEmployees(this.employee).subscribe(
      res=> {console.log(res);
        this.router.navigate(['/home']);
      },
      err=>console.error(err)
    )
  }

  upDateEmployee(){
    if(this.employee.cargo === ""){
      alert("Selecciona un puesto")
    }
    else{

      this.positionService.updateEmployee(this.employee.id, this.employee).subscribe(
        res=>{console.log(res);
          this.router.navigate(['/home']);
          },
          err=>console.error(err)
      )
    }
  }

}
