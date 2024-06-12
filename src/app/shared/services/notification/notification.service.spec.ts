
import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationMessageComponent } from '../../ui/notification-message/notification-message.component';
import { NOTIFICATION_TYPE_CONST } from '../../ui/notification-message/models/notification-config.model';

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
                    notificationType: NOTIFICATION_TYPE_CONST.SUCCESS
                },
                panelClass: 'success',
                ...service.DEFAULT_CONFIG
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
                    notificationType: NOTIFICATION_TYPE_CONST.WARNING
                },
                panelClass: 'warn',
                ...service.DEFAULT_CONFIG
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
                    notificationType: NOTIFICATION_TYPE_CONST.ERROR
                },
                panelClass: 'danger',
                ...service.DEFAULT_CONFIG
            })
        );
    });
});