import { FormControl } from "@angular/forms";

export interface GroupFormViewModel {
    name: FormControl<string>;
    description: FormControl<string>;
    logo: FormControl<string>;
}