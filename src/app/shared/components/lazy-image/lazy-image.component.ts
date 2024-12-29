import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent {
  public src = input.required<string>();
  public alt = input<string>('');

  public hasLoaded: boolean = false;

  onLoad(): void {
    console.log('Image loaded');
    this.hasLoaded = true;
  }
}
