import { Component, signal } from '@angular/core';
import { TransactionService } from '../../shared/services/api/transaction.service';
import { Transaction } from '../../shared/models/api/transaction.model';
import { finalize } from 'rxjs';
import { DatePipe } from '@angular/common';

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

  public transactions: Transaction[] = [];
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
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((transactions: Transaction[]) => {
        this.transactions = transactions;
    });
  }
}
