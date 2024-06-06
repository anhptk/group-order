export const NOTIFICATION_TYPE_CONST = {
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR'
} as const

export type NOTIFICATION_TYPE = typeof NOTIFICATION_TYPE_CONST[keyof typeof NOTIFICATION_TYPE_CONST]

export class NotificationConfig {
    public message: string;
    public notificationType: NOTIFICATION_TYPE;
}