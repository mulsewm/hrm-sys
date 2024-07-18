import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate.model';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {
  @Input() candidate: Candidate | null = null; // Initialize to null

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCandidate();
  }

  getCandidate(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Non-null assertion
    this.candidateService.getCandidate(id)
      .subscribe((candidate: Candidate) => this.candidate = candidate); // Ensure type safety
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.candidate) { // Add null check
      this.candidateService.updateCandidate(this.candidate.id, this.candidate)
        .subscribe(() => this.goBack());
    }
  }
}
