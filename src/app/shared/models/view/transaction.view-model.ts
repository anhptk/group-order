import { Transaction, TransactionType } from '../api/transaction.model';
import { MemberInfo } from '../api/member-info.model';

export class TransactionViewModel {
    id: number;
    amount: number;
    createdAt: Date;
    fromMember: MemberInfo;
    toMember: MemberInfo;
    transactionType: TransactionType;

    constructor(data?: Partial<TransactionViewModel>) {
      Object.assign(this, data);
    }

    public static createFromApiModel(data: Transaction): TransactionViewModel {
      return new TransactionViewModel({
        id: data.id,
        amount: data.amount,
        createdAt: new Date(data.created_at),
        fromMember: data.from_member,
        toMember: data.to_member,
        transactionType: data.type
      });
    }
}