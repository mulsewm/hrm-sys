// src/app/candidates/candidates.component.ts
import { Component, OnInit } from '@angular/core';
import { CandidateService } from './candidate.service';
import { Candidate } from './candidate.model';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
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
    this.candidateService.addCandidate({ name, email, phone } as Candidate)
      .subscribe(candidate => this.candidates.push(candidate));
  }

  updateCandidate(candidate: Candidate): void {
    this.candidateService.updateCandidate(candidate.id, candidate)
      .subscribe();
  }

  deleteCandidate(candidate: Candidate): void {
    this.candidateService.deleteCandidate(candidate.id)
      .subscribe(() => this.candidates = this.candidates.filter(c => c !== candidate));
  }
}