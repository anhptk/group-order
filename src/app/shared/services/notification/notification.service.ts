import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { NotificationMessageComponent } from "../../ui/notification-message/notification-message.component";
import { NOTIFICATION_TYPE_CONSTANTS, NotificationConfig } from "../../ui/notification-message/models/notification-config.model";

@Injectable({ providedIn: 'root' })
export class NotificationService {
    public readonly DEFAULT_CONFIG: MatSnackBarConfig = {
        verticalPosition: 'top',
        horizontalPosition: 'end',
        duration: 2500
    };
    constructor(
        private _snackBar: MatSnackBar
    ) { }

    public pushSuccess(message: string): void {
        this._snackBar.openFromComponent(NotificationMessageComponent, {
            data: {
                message: message,
                type: NOTIFICATION_TYPE_CONSTANTS.SUCCESS
            } as NotificationConfig,
            panelClass: 'success',
            ...this.DEFAULT_CONFIG
        });
    }

    public pushWarning(message: string): void {
        this._snackBar.openFromComponent(NotificationMessageComponent, {
            data: {
                message: message,
                type: NOTIFICATION_TYPE_CONSTANTS.WARNING
            } as NotificationConfig,
            panelClass: 'warn',
            ...this.DEFAULT_CONFIG
        });
    }

    public pushFail(message): void {
        this._snackBar.openFromComponent(NotificationMessageComponent, {
            data: {
                message: message,
                type: NOTIFICATION_TYPE_CONSTANTS.ERROR
            } as NotificationConfig,
            panelClass: 'danger',
            ...this.DEFAULT_CONFIG
        })
    }
}