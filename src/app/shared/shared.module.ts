import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImageComponent, SidebarComponent } from './components';

@NgModule({
  declarations: [SidebarComponent, LazyImageComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, LazyImageComponent],
})
export class SharedModule {}
