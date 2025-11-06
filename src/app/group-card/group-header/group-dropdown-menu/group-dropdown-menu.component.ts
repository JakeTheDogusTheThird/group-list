import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-group-dropdown-menu',
  standalone: true,
  imports: [NgIf],
  templateUrl: './group-dropdown-menu.component.html',
  styleUrl: './group-dropdown-menu.component.css',
})
export class GroupDropdownMenuComponent implements OnChanges{
  @Input() isButtonVisible: boolean = false;
  isButtonPressed: boolean = false;
  menuItems = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isButtonVisible'].currentValue == false) {
      this.onButtonVisibleChange()
    }
  }

  onButtonVisibleChange() {
    this.isButtonPressed = false;
  }

  toggle(): void {
    this.isButtonPressed = !this.isButtonPressed;
  }

  isMenuVisible(): boolean {
    return this.isButtonPressed && this.isButtonVisible;
  }
}
