import { FormControl } from "@angular/forms";

export interface CompleteGroupOrderInfoFormViewModel {
    orders: FormControl<number[]>;
    actual: FormControl<number>;
}