import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface OrderItemFormViewModel {
    name: FormControl<string>;
    unitPrice: FormControl<number>;
    quantity: FormControl<number>;
    note: FormControl<string>;
}
