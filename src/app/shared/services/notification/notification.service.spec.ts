
import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationMessageComponent } from '../../ui/notification-message/notification-message.component';
import { NOTIFICATION_TYPE_CONSTANTS } from '../../ui/notification-message/models/notification-config.model';

describe('NotificationService', () => {
    let service: NotificationService;
    let spyMatSnackbarService: Partial<jasmine.SpyObj<MatSnackBar>>;

    beforeEach(() => {
        spyMatSnackbarService = {
            openFromComponent: jasmine.createSpy<any>('openFromComponent')
        }
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: MatSnackBar, useValue: spyMatSnackbarService }
            ]
        });
        TestBed.runInInjectionContext(() => {
            service = inject(NotificationService);
        })
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should push success message', () => {
        const mockMessage = 'success msg';
        service.pushSuccess(mockMessage);

        expect(spyMatSnackbarService.openFromComponent).toHaveBeenCalledWith(
            NotificationMessageComponent,
            jasmine.objectContaining({
                data: {
                    message: mockMessage,
                    type: NOTIFICATION_TYPE_CONSTANTS.SUCCESS
                },
                panelClass: 'success'
            })
        );
    });

    it('should push warn message', () => {
        const mockMessage = 'warn msg';
        service.pushWarning(mockMessage);

        expect(spyMatSnackbarService.openFromComponent).toHaveBeenCalledWith(
            NotificationMessageComponent,
            jasmine.objectContaining({
                data: {
                    message: mockMessage,
                    type: NOTIFICATION_TYPE_CONSTANTS.WARNING
                },
                panelClass: 'warn'
            })
        );
    });

    it('should push failed message', () => {
        const mockMessage = 'failed msg';
        service.pushFail(mockMessage);

        expect(spyMatSnackbarService.openFromComponent).toHaveBeenCalledWith(
            NotificationMessageComponent,
            jasmine.objectContaining({
                data: {
                    message: mockMessage,
                    type: NOTIFICATION_TYPE_CONSTANTS.ERROR
                },
                panelClass: 'danger'
            })
        );
    });
});