import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces';

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  public gif = input.required<Gif>();
}
