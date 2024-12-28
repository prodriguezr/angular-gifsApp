import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services';

@Component({
  selector: 'shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  @Input()
  public title: string = '';

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  onTagClick(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
