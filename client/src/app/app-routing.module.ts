import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEmployeeComponent } from "./emp-dashboard/add-employee/add-employee.component";
import { EditEmployeeComponent } from "./emp-dashboard/edit-employee/edit-employee.component";
import { EmployeesListComponent } from "./emp-dashboard/employees-list/employees-list.component";

const routes: Routes = [
  { path: "", redirectTo: "employees", pathMatch: "full" },
  { path: "employees", component: EmployeesListComponent },
  { path: "employees/new", component: AddEmployeeComponent },
  { path: "employees/edit/:id", component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
