import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate.model';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidatesComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService.getCandidates().subscribe(candidates => this.candidates = candidates);
  }

  addCandidate(name: string, email: string, phone: string): void {
    console.log('Add Candidate called'); // Add this line for debugging
    if (!name || !email) { return; }
    const newCandidate: Candidate = { name, email, phone } as Candidate;
    this.candidateService.addCandidate(newCandidate)
      .subscribe(candidate => {
        console.log('Candidate added:', candidate); // Add this line for debugging
        this.candidates.push(candidate);
        this.getCandidates(); // Fetch updated list after adding
      }, error => {
        console.error('Error adding candidate:', error); // Add this line for debugging
      });
  }

  updateCandidate(candidate: Candidate): void {
    this.candidateService.updateCandidate(candidate.id, candidate)
      .subscribe();
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
