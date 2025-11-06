import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf} from '@angular/common';
import { Group } from '../../models/group.model';
import { GroupDropdownMenuComponent } from './group-dropdown-menu/group-dropdown-menu.component';
import { GroupUserListComponent } from "./group-user-list/group-user-list.component";

@Component({
  selector: 'app-group-header',
  standalone: true,
  imports: [NgIf, GroupDropdownMenuComponent, GroupUserListComponent],
  templateUrl: './group-header.component.html',
  styleUrl: './group-header.component.css'
})
export class GroupHeaderComponent {
  @Input() group!: Group;
  @Input() showMenuButton = false;
}
