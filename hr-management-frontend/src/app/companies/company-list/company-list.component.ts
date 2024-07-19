import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'email', 'phone', 'actions'];
  dataSource: MatTableDataSource<Company> = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe(
      (data: Company[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  addCompany(name: string, address: string, email: string, phone: string) {
    const newCompany: Company = { name, address, email, phone };
    this.companyService.addCompany(newCompany).subscribe(
      (data: Company) => {
        this.getCompanies();
      },
      error => {
        console.error('Error adding company:', error);
      }
    );
  }


  updateCompany(company: Company) {
    if (company.id) {
      this.companyService.updateCompany(company.id, company).subscribe(
        (data: Company) => {
          this.getCompanies();
        },
        error => {
          console.error('Error updating company:', error);
        }
      );
    }
  }

  deleteCompany(company: Company) {
    if (company.id) {
      this.companyService.deleteCompany(company.id).subscribe(
        () => {
          this.getCompanies();
        },
        error => {
          console.error('Error deleting company:', error);
        }
      );
    }
  }
}
