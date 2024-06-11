import { FormControl } from '@angular/forms';

export interface MemberProfileFormViewModel {
    name: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
}