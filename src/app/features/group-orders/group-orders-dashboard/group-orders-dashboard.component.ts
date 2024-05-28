import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AppDataService } from '../../../shared/services/auth/app-data.service';
import { Observable } from 'rxjs';
import { MemberInfo } from '../../../shared/models/api/member-info.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-orders-dashboard',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './group-orders-dashboard.component.html',
  styleUrl: './group-orders-dashboard.component.scss'
})
export class GroupOrdersDashboardComponent {
  public currentUser$: Observable<MemberInfo | null>;

  constructor(
    private _appData: AppDataService
  ) { 
    this.currentUser$ = this._appData.currentUser$;
  }
}
