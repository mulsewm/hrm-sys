import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidates/candidate-detail/candidate-detail.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';

const routes: Routes = [
  { path: 'candidates', component: CandidatesComponent },
  { path: 'candidates/:id', component: CandidateDetailComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: '', redirectTo: '/candidates', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
