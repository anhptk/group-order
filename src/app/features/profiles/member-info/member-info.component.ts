import { Component, Input, input, computed } from '@angular/core';
import { MemberInfo } from '../../../shared/models/api/member-info.model';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-member-info',
  standalone: true,
  imports: [MatMenuModule, RouterModule, NgClass],
  templateUrl: './member-info.component.html',
  styleUrl: './member-info.component.scss'
})
export class MemberInfoComponent {
  public memberInfo = input<MemberInfo>(undefined);
  public memberProfileUrl = computed(() => `url(${this.memberInfo().picture})`);

  @Input() align: 'left' | 'right' | 'center' = 'left';
}
