import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroupCardComponent } from './group-card/group-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroupCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
