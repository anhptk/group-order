import { Component, Input } from '@angular/core';
import { MemberInfo } from '../../models/api/member-info.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-member-display',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './member-display.component.html',
  styleUrl: './member-display.component.scss'
})
export class MemberDisplayComponent {
  @Input({required: true}) member: MemberInfo;
}
