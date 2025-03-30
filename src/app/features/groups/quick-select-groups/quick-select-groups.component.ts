import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Group } from '../../../shared/models/api/group.model';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { GroupService } from '../../../shared/services/api/group.service';
import { MatIconModule } from '@angular/material/icon';
import { CreateGroupDialogComponent } from '../create-group-dialog/create-group-dialog.component';
import { DEFAULT_DIALOG_SIZE } from '../../../shared/constants/dialog.constant';

@Component({
  selector: 'app-quick-select-groups',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatSlideToggleModule, FormsModule, MatIconModule],
  templateUrl: './quick-select-groups.component.html',
  styleUrl: './quick-select-groups.component.scss'
})
export class QuickSelectGroupsComponent implements OnInit {
  public groups = signal<Group[]>([]);
  public isLoading = signal(true);
  public readonly selectedGroup = new FormControl<number>(null, [Validators.required]);
  public showGroupAction = false;

  private readonly _router = inject(Router);
  private readonly _groupService = inject(GroupService);
  private readonly _dialog = inject(MatDialog);

  ngOnInit(): void {
    this._loadJoinedGroups();
  }

  private _loadJoinedGroups(): void {
    this._groupService.query({joined: true}).subscribe(groups => {
      this.groups.set(groups);
      this.isLoading.set(false);
    });
  }

  public enterGroup(): void {
    if (this.selectedGroup.invalid) {
      return;
    }

    this._router.navigate(['groups', this.selectedGroup.value]);
  }

  public openCreateGroupDialog(): void {
    const dialog = this._dialog.open(CreateGroupDialogComponent, DEFAULT_DIALOG_SIZE);
    dialog.afterClosed().subscribe((group?: Group) => {
      if (group) {
        this.groups.update(groups => [...groups, group]);
        this.selectedGroup.setValue(group.id);
      }
    });
  }
}
