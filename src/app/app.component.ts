import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { GroupCardComponent } from './group-card/group-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroupCardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  groups = [
    {
      name: 'Developers',
      warning: 'Backend service latency',
      users: ['Alice', 'Bob', 'Carol'],
      services: [
        { title: 'API Access', min: 1, max: 5 },
        { title: 'Database', min: 2, max: 10 },
      ],
    },
    {
      name: 'Designers',
      users: ['Dave', 'Emma'],
      services: [{ title: 'Figma Access', min: 1, max: 3 }],
    },
  ];
}
