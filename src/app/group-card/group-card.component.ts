import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Group } from '../models/group';

@Component({
  selector: 'app-group-card',
  standalone: true,
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css'],
  imports: [NgIf, NgFor],
})
export class GroupCardComponent {
  @Input({ required: true }) group!: Group;

  showMenu = false;
}