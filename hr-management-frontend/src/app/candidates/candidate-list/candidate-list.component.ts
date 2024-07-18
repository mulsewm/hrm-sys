import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate.model';
import { EditCandidateDialogComponent } from '../edit-candidate-dialog/edit-candidate-dialog.component';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidatesComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService, public dialog: MatDialog) { }

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
        this.getCandidates(); 
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
            this.getCandidates(); 
          });
      }
    });
  }

  deleteCandidate(candidate: Candidate): void {
    if (confirm('Are you sure you want to delete this candidate?')) {
      this.candidateService.deleteCandidate(candidate.id)
        .subscribe(() => {
          this.candidates = this.candidates.filter(c => c !== candidate);
        });
    }
  }
}
