import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate.model';
import { EditCandidateDialogComponent } from '../edit-candidate-dialog/edit-candidate-dialog.component';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidatesComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(
    private candidateService: CandidateService, 
    public dialog: MatDialog,
    private snackBar: MatSnackBar 

  ) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService.getCandidates().subscribe(candidates => this.candidates = candidates);
  }

  addCandidate(name: string, email: string, phone: string): void {
    if (!name || !email) { return; }
    const newCandidate: Candidate = { name, email, phone } as Candidate;
    this.candidateService.addCandidate(newCandidate)
      .subscribe(candidate => {
        this.candidates.push(candidate);
        this.getCandidates(); // Fetch updated list after adding]
        this.snackBar.open('New Candidate is Added', 'Close', {
          duration: 3000, 
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
            this.snackBar.open('Data is Updated', 'Close', {
              duration: 3000, 
            });
          });
      }
    });
  }

  deleteCandidate(candidate: Candidate): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      enterAnimationDuration: '300ms', // Animation duration
      exitAnimationDuration: '300ms',
      data: candidate
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.candidateService.deleteCandidate(candidate.id)
          .subscribe(() => {
            this.candidates = this.candidates.filter(c => c !== candidate);
          });
      }
    });
  }
}
