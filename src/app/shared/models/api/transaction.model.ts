import { MemberInfo } from './member-info.model';

const TRANSACTION_TYPE = {
  TRANSFER: 'transfer',
  COMPLETE_ORDER: 'complete_order'
}

export type TransactionType = typeof TRANSACTION_TYPE[keyof typeof TRANSACTION_TYPE];

export interface Transaction {
  id: number;
  amount: number;
  created_at: string;
  from_member: MemberInfo;
  to_member: MemberInfo;
  type?: TransactionType;
}

export interface CreateTransactionPayload {
  amount: number;
  to_member: number;
}

export interface QueryTransactionParams {
  from_member?: number;
  to_member?: number;
  created_at_after?: string;
  created_at_before?: string;
  type?: TransactionType;
}