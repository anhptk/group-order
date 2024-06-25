import { Component, signal } from '@angular/core';
import { TransactionService } from '../../shared/services/api/transaction.service';
import { Transaction } from '../../shared/models/api/transaction.model';
import { finalize, map } from 'rxjs';
import { DatePipe } from '@angular/common';
import { TransactionViewModel } from '../../shared/models/view/transaction.view-model';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  public transactions: TransactionViewModel[];
  public isLoading = signal(true);

  constructor(
    private readonly _transactionService: TransactionService
  ) {}

  ngOnInit() {
    this._getTransactions();
  }

  private _getTransactions(): void {
    this.isLoading.set(true)
    this._transactionService.query()
      .pipe(
        finalize(() => this.isLoading.set(false)),
        map((transactions: Transaction[]) => transactions.map(transaction => TransactionViewModel.createFromApiModel(transaction)))
      )
      .subscribe((transactions: TransactionViewModel[]) => this.transactions = transactions);
  }
}
