import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "../../shared/interfaces/employee";
import { EmployeeService } from "../../shared/services/employee.service";


@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.scss"],
})
export class AddEmployeeComponent {
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  addEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe({
      next: () => {
        this.router.navigate(["/employees"]);
      },
      error: (error) => {
        alert("Failed to create employee");
        console.error(error);
      },
    });
  }
}
