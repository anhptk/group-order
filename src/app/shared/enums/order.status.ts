export const ORDER_STATUS = {
    IN_PROGRESS : 'in_progress',
    COMPLETED : 'completed',
    CANCELLED : 'cancelled'
}

export type OrderStatus = typeof ORDER_STATUS[keyof typeof ORDER_STATUS];