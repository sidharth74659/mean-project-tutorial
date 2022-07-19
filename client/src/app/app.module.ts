import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./emp-dashboard/employees-list/employees-list.component";
import { EmployeeFormComponent } from "./emp-dashboard/employee-form/employee-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddEmployeeComponent } from './emp-dashboard/add-employee/add-employee.component';
import { EditEmployeeComponent } from './emp-dashboard/edit-employee/edit-employee.component';

@NgModule({
  declarations: [AppComponent, EmployeesListComponent, EmployeeFormComponent, AddEmployeeComponent, EditEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
