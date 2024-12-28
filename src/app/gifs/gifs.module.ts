import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages';
import { SearchBoxComponent } from './components';
import { CardListComponent } from './components/card-list/card-list.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
  providers: [provideHttpClient()],
})
export class GifsModule {}
