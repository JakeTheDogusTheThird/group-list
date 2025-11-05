import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-group-dropdown-menu',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './group-dropdown-menu.component.html',
  styleUrl: './group-dropdown-menu.component.css',
})
export class GroupDropdownMenuComponent {
  @Input() showMenuButton = false;
  @Input() dropDownVisible = false;

  menuItems = [];

  toggle(): void {
    this.dropDownVisible = !this.dropDownVisible;
  }
}
