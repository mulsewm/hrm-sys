import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate.model';
import { EditCandidateDialogComponent } from '../edit-candidate-dialog/edit-candidate-dialog.component';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidatesComponent implements OnInit, AfterViewInit {
  candidates: Candidate[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];
  dataSource: MatTableDataSource<Candidate> = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private candidateService: CandidateService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCandidates(): void {
    this.candidateService.getCandidates().subscribe(candidates => {
      this.candidates = candidates;
      this.dataSource.data = this.candidates;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  addCandidate(name: string, email: string, phone: string): void {
    if (!name || !email) { return; }
    const newCandidate: Candidate = { name, email, phone } as Candidate;
    this.candidateService.addCandidate(newCandidate)
      .subscribe(candidate => {
        this.candidates.push(candidate);
        this.dataSource.data = this.candidates;
        this.snackBar.open('Candidate added successfully', 'Close', {
          duration: 3000, // Duration in milliseconds
        });
      });
  }

  updateCandidate(candidate: Candidate): void {
    const dialogRef = this.dialog.open(EditCandidateDialogComponent, {
      width: '250px',
      data: { ...candidate }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedCandidate: Candidate = { ...candidate, ...result };
        this.candidateService.updateCandidate(updatedCandidate.id, updatedCandidate)
          .subscribe(() => {
            this.getCandidates(); // Fetch updated list after editing
          });
      }
    });
  }

  deleteCandidate(candidate: Candidate): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      enterAnimationDuration: '300ms', // Animation duration
      exitAnimationDuration: '300ms', // Animation duration
      data: candidate
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.candidateService.deleteCandidate(candidate.id)
          .subscribe(() => {
            this.candidates = this.candidates.filter(c => c !== candidate);
            this.dataSource.data = this.candidates;
          });
      }
    });
  }
}
