import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { SubmitButtonComponent } from "../../../shared/ui/submit-button/submit-button.component";
import { CompleteGroupOrderInfoFormViewModel } from "../../../shared/models/forms/group-order-info-form.view-model";
import { GroupOrderInfoViewModel } from "../../../shared/models/view/group-order-info.view-model";
import { GroupOrderInfoService } from "../../../shared/services/api/group-order-info.service";
import { finalize } from "rxjs";
import { MatOption, MatSelect } from "@angular/material/select";

@Component({
  selector: 'app-complete-group-order-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatIcon,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    SubmitButtonComponent,
    MatDialogClose,
    MatSelect,
    MatOption
  ],
  templateUrl: './complete-group-order-dialog.component.html',
  styleUrl: './complete-group-order-dialog.component.scss'
})
export class CompleteGroupOrderDialogComponent {
  public mainForm: FormGroup<CompleteGroupOrderInfoFormViewModel>;
  public isSubmitting = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GroupOrderInfoViewModel,
    private readonly _groupOrderService: GroupOrderInfoService,
    private readonly _dialogRef: MatDialogRef<CompleteGroupOrderDialogComponent>
  ) {
    this._constructForm();
  }

  private _constructForm() {
    this.mainForm = new FormGroup(<CompleteGroupOrderInfoFormViewModel>{
      orders: new FormControl(this.data.orders.map(order => order.id)),
      actualAmount: new FormControl(this.data.total, [Validators.required, Validators.min(0)])
    });
  }

  public completeOrder(): void {
    const payload = {
      orders: this.mainForm.value.orders,
      actual_amount: this.mainForm.value.actualAmount
    }

    this.isSubmitting = true;
    this._groupOrderService.complete(this.data.id, payload)
      .pipe(finalize(() => this.isSubmitting = false))
      .subscribe(() => {
        this._dialogRef.close(this.data.id);
    });
  }
}
