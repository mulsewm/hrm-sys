import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidate } from '../candidate.model';

@Component({
  selector: 'app-edit-candidate-dialog',
  templateUrl: './edit-candidate-dialog.component.html',
  styleUrls: ['./edit-candidate-dialog.component.scss']
})
export class EditCandidateDialogComponent implements OnInit {
  editCandidateForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditCandidateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Candidate,
    private fb: FormBuilder
  ) {
    this.editCandidateForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      phone: [data.phone]
    });
  }

  ngOnInit(): void {
  }

  onSave(): void {
    if (this.editCandidateForm.valid) {
      this.dialogRef.close(this.editCandidateForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
