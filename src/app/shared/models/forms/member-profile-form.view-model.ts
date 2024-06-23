import { FormControl } from '@angular/forms';

export interface MemberProfileFormViewModel {
    name: FormControl<string>;
    picture: FormControl<string>;
}