import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderItemFormViewModel } from '../../../shared/models/forms/order-info-form.view-model';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SubmitButtonComponent } from '../../../shared/ui/submit-button/submit-button.component';
import { MatDivider } from '@angular/material/divider';
import { CreateOrderInfoPayload } from '../../../shared/models/api/order-info.model';
import { OrderInfoService } from '../../../shared/services/api/order-info.service';
import { finalize } from 'rxjs';
import { OrderInfoViewModel } from '../../../shared/models/view/order-info.view-model';

@Component({
  selector: 'app-create-order-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatIcon, MatButtonModule, ReactiveFormsModule, MatInputModule, SubmitButtonComponent, MatDivider, MatDialogClose],
  templateUrl: './create-order-dialog.component.html',
  styleUrl: './create-order-dialog.component.scss'
})
export class CreateOrderDialogComponent implements OnInit {
  public mainForm: FormArray<FormGroup<OrderItemFormViewModel>> = new FormArray([]);

  public isSubmitting = false;

  constructor(
    private _orderService: OrderInfoService,
    private _dialogRef: MatDialogRef<CreateOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrderInfoViewModel
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this._bindData();
    } else {
      this.addRowForm();
    }
  }

  public addRowForm(): void {
    const row = new FormGroup<OrderItemFormViewModel>({
      name: new FormControl(null, [Validators.required]),
      unitPrice: new FormControl(null, [Validators.required, Validators.min(0)]),
      quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
      note: new FormControl(null)
    });

    this.mainForm.push(row);
    this.mainForm.updateValueAndValidity();
  }

  public removeRowForm(index: number): void {
    this.mainForm.removeAt(index);
    this.mainForm.updateValueAndValidity();
  }

  private _bindData(): void {
    this.data.items.forEach(item => {
      const row = new FormGroup<OrderItemFormViewModel>({
        name: new FormControl(item.name, [Validators.required]),
        unitPrice: new FormControl(item.unit_price, [Validators.required, Validators.min(0)]),
        quantity: new FormControl(item.quantity, [Validators.required, Validators.min(1)]),
        note: new FormControl(item.note)
      });

      this.mainForm.push(row);
      this.mainForm.markAsDirty();
    });
  }

  public create(): void {
    // Implementation
    this.isSubmitting = true;
    const payload = this._preparePayload();

    this._orderService.create(payload)
      .pipe(finalize(() => this.isSubmitting = false))
      .subscribe(() => {
        this._dialogRef.close(true);
      });
  }

  private _preparePayload(): CreateOrderInfoPayload {
    return {
      items: this.mainForm.controls.map((control: FormGroup<OrderItemFormViewModel>) => {
        return {
          name: control.value.name,
          unit_price: control.value.unitPrice,
          quantity: control.value.quantity,
          note: control.value.note
        };
      })
    };
  }
}
