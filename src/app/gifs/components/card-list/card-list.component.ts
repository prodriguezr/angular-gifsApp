import { Component, input } from '@angular/core';

import { Gif } from '../../interfaces';

@Component({
  selector: 'gifs-card-list',
  standalone: false,

  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  public gifs = input<Gif[]>([]);
}
