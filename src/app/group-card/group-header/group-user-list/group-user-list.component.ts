import { Component, Input } from '@angular/core';
import { User } from '../../../models/user.model';
import { NgFor, NgIf, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-group-user-list',
  standalone: true,
  imports: [NgIf, NgFor, SlicePipe],
  templateUrl: './group-user-list.component.html',
  styleUrl: './group-user-list.component.css'
})
export class GroupUserListComponent {
  @Input() users!: User[];
}
