import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidates/candidate-detail/candidate-detail.component';
// Import the new components
// import { CompanyListComponent } from './companies/company-list/company-list.component';
// import { DepartmentListComponent } from './departments/department-list/department-list.component';
// import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const routes: Routes = [
  { path: 'candidates', component: CandidatesComponent },
  { path: 'candidates/:id', component: CandidateDetailComponent },
  // { path: 'companies', component: CompanyListComponent }, // Define route for companies
  // { path: 'departments', component: DepartmentListComponent }, // Define route for departments
  // { path: 'employees', component: EmployeeListComponent }, // Define route for employees
  { path: '', redirectTo: '/candidates', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
