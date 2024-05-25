import { FormControl } from "@angular/forms";

export interface LoginFormViewModel {
    email: FormControl<string>;
    password: FormControl<string>;
}

export interface RegisterFormViewModel {
    email: FormControl<string>;
    name: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
}