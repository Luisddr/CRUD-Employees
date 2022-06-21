import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from '../models/employees'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {}

  getEmployees(){
    return this.http.get('http://localhost:3001/empleados')
  };

  getEmployeeById(id:number){
    return this.http.get(`http://localhost:3001/empleados/${id}`)
  }

  getPositions(){
    return this.http.get('http://localhost:3001/cargos')
  }

  postEmployees(Employee: Employee){
    return this.http.post('http://localhost:3001/empleados', Employee)
  };

  deleteEmployee(id:number){
    return this.http.delete(`http://localhost:3001/empleados/${id}`)
  };

  updateEmployee(id:number, upDatedFields: Employee ){
    return this.http.put(`http://localhost:3001/empleados/${id}`, upDatedFields)
  }

}
