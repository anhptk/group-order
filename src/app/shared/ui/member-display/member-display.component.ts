import { Component, Input } from '@angular/core';
import { MemberInfo } from '../../models/api/member-info.model';

@Component({
  selector: 'app-member-display',
  standalone: true,
  imports: [],
  templateUrl: './member-display.component.html',
  styleUrl: './member-display.component.scss'
})
export class MemberDisplayComponent {
  @Input({required: true}) member: MemberInfo;
}
