import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages';
import { SearchBoxComponent } from './components';
import { CardListComponent } from './components/card-list/card-list.component';
import { provideHttpClient } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
  providers: [provideHttpClient()],
})
export class GifsModule {}
