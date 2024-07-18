import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http'; // Use HttpClient instead of HttpClientModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidates/candidate-detail/candidate-detail.component';
import { CandidateService } from './candidates/candidate.service';
import { MaterialModule } from './material.module';
// import { CompanyListComponent } from './companies/company-list/company-list.component';
// import { DepartmentListComponent } from './departments/department-list/department-list.component';
// import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailComponent,
    // CompanyListComponent,
    // DepartmentListComponent,
    // EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }