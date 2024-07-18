import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates/candidate-list/candidate-list.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
// import { DepartmentListComponent } from './departments/department-list/department-list.component';
// import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const routes: Routes = [
  { path: 'candidates', component: CandidatesComponent },
  { path: 'companies', component: CompanyListComponent },
  // { path: 'departments', component: DepartmentListComponent },
  // { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: '/candidates', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
