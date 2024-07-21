import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { TransactionService } from '../../shared/services/api/transaction.service';
import { Transaction } from '../../shared/models/api/transaction.model';
import { finalize, map } from 'rxjs';
import { DatePipe } from '@angular/common';
import { TransactionViewModel } from '../../shared/models/view/transaction.view-model';
import { MatTableModule } from '@angular/material/table';
import { MemberDisplayComponent } from "../../shared/ui/member-display/member-display.component";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    DatePipe,
    MatTableModule,
    MemberDisplayComponent
],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  @Input() specificMemberId: number;
  public transactions: TransactionViewModel[];
  public displayedColumns: string[] = ['index', 'date', 'from', 'to', 'amount'];
  public isLoading = signal(true);

  constructor(
    private readonly _transactionService: TransactionService
  ) {}

  ngOnInit() {
    this._getTransactions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['specificMemberId']) {
      this._getTransactions();
    }
  }

  private _getTransactions(): void {
    const params = this.specificMemberId ? { member: this.specificMemberId } : {};

    this.isLoading.set(true)
    this._transactionService.query(params)
      .pipe(
        finalize(() => this.isLoading.set(false)),
        map((transactions: Transaction[]) => transactions.map(transaction => TransactionViewModel.createFromApiModel(transaction)))
      )
      .subscribe((transactions: TransactionViewModel[]) => this.transactions = transactions);
  }
}
