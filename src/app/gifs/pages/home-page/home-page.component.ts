import { Component, inject } from '@angular/core';
import { GifsService } from '../../services';
import { Gif } from '../../interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private gifsService: GifsService = inject(GifsService);

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
