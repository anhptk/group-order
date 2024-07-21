import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MemberInfo } from '../../../shared/models/api/member-info.model';
import { MemberDisplayComponent } from '../../../shared/ui/member-display/member-display.component';
import { SubmitButtonComponent } from "../../../shared/ui/submit-button/submit-button.component";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TransactionService } from '../../../shared/services/api/transaction.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-trade-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MemberDisplayComponent, SubmitButtonComponent, ReactiveFormsModule, MatInputModule, MatIconModule],
  templateUrl: './trade-dialog.component.html',
  styleUrl: './trade-dialog.component.scss'
})
export class TradeDialogComponent {

  public isSubmitting = false;
  public amountControl: FormControl<number>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {member: MemberInfo},
    private readonly _transactionService: TransactionService,
    private readonly _dialogRef: MatDialogRef<TradeDialogComponent>
  ) { 

    this.amountControl = new FormControl(null, [Validators.required, Validators.min(0)]);
  }

  public submitTrade(): void {
    this.isSubmitting = true;

    this._transactionService.trade(this.data.member.id, this.amountControl.value)
    .pipe(finalize(() => this.isSubmitting = false))
    .subscribe(() => {
      this._dialogRef.close(true);
    });
  }
}
