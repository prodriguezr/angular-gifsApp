import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag(): void {
    const tag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(tag);

    this.tagInput.nativeElement.value = '';
  }
}
