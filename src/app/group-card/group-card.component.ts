import { Component } from '@angular/core';
import { Group } from '../models/group.model';
import { NgIf, NgFor, SlicePipe, CurrencyPipe } from '@angular/common';
import { GroupHeaderComponent } from "./group-header/group-header.component";

@Component({
  selector: 'app-group-card',
  standalone: true,
  imports: [NgIf, NgFor, SlicePipe, CurrencyPipe, GroupHeaderComponent],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.css',
})
export class GroupCardComponent {
  showMenuButton: boolean = false;

  group: Group = {
    services: [
      {
        title: 'MAV',
        code: 'MAV-SLIP',
        min: '1',
        max: '500',
      },
      {
        title: 'RAV',
        code: 'RAV-SLIP',
        min: '1',
        max: '500',
      },
      {
        title: 'RAV',
        code: 'RAV-SLIP',
        min: '1',
        max: '500',
      },
      {
        title: 'RAV',
        code: 'RAV-SLIP',
        min: '1',
        max: '500',
      },
      {
        title: 'RAV',
        code: 'RAV-SLIP',
        min: '1',
        max: '500',
      },
      {
        title: 'RAV',
        code: 'RAV-SLIP',
        min: '1',
        max: '500',
      },
      {
        title: 'RAV',
        code: 'RAV-SLIP',
        min: '1',
        max: '500',
      },
      {
        title: 'RAV',
        code: 'RAV-SLIP',
        min: '1',
        max: '500',
      },
    ],
    name: 'Group 1',
    id: 22,
    min: '1',
    max: '500',
    users: [
      {
        id: '09452W4295001',
        initials: 'EB',
        fullName: 'Elisa Blu',
      },
      {
        id: '09452W4295002',
        initials: 'MS',
        fullName: 'Martin Scorsese',
      },
      {
        id: '09452W4295003',
        initials: 'RM',
        fullName: 'Robert Martin',
      },
      {
        id: '09452W4295003',
        initials: 'RM',
        fullName: 'Robert Martin',
      },
      {
        id: '09452W4295003',
        initials: 'RM',
        fullName: 'Robert Martin',
      },
    ],
    warning: 'Some warning message',
  };
}
