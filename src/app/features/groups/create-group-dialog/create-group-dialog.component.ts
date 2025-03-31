import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GroupFormViewModel } from '../../../shared/models/forms/group-form.view-model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SubmitButtonComponent } from '../../../shared/ui/submit-button/submit-button.component';
import { GroupService } from '../../../shared/services/api/group.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-create-group-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, SubmitButtonComponent],
  templateUrl: './create-group-dialog.component.html',
  styleUrl: './create-group-dialog.component.scss'
})
export class CreateGroupDialogComponent {
  public form: FormGroup<GroupFormViewModel>;
  public isSubmitting = signal(false);

  private readonly _groupService = inject(GroupService);
  private readonly _dialogRef = inject(MatDialogRef<CreateGroupDialogComponent>);

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      logo: new FormControl(null)
    })
  }

  public createGroup(): void {
    if (this.form.invalid) {
      return;
    }

    this.isSubmitting.set(true);

    const payload = {
      name: this.form.value.name,
      description: this.form.value.description,
      logo: this.form.value.logo
    }

    this._groupService.create(payload)
    .pipe(finalize(() => this.isSubmitting.set(false)))
    .subscribe((group) => {
      this._dialogRef.close(group);
    })
  }
}
