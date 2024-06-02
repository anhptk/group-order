export const NOTIFICATION_TYPE_CONSTANTS = {
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR'
} as const

export type NOTIFICATION_TYPE = typeof NOTIFICATION_TYPE_CONSTANTS[keyof typeof NOTIFICATION_TYPE_CONSTANTS]

export class NotificationConfig {
    public message: string;
    public type: NOTIFICATION_TYPE;
}