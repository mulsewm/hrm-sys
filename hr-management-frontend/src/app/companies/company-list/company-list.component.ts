// src/app/companies/company-list/company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  addCompany(name: string, location: string): void {
    this.companyService.addCompany({ name, location } as Company)
      .subscribe(company => this.companies.push(company));
  }

  updateCompany(company: Company): void {
    this.companyService.updateCompany(company.id, company)
      .subscribe();
  }

  deleteCompany(company: Company): void {
    this.companyService.deleteCompany(company.id)
      .subscribe(() => this.companies = this.companies.filter(c => c !== company));
  }
}
