import { Injectable } from '@angular/core';
import { environment } from '../environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GiphySearchResponse } from '../interfaces';

const GIPHY_API_KEY = environment.giphyApiKey;
const GIPHY_API_URL = environment.giphyApiUrl;

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
  }

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.slice(0, 10);

    this.saveLocalStorage();
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('q', tag)
      .set('limit', '10');

    this.httpClient
      .get<GiphySearchResponse>(GIPHY_API_URL + '/search', { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
      });
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('tagsHistory')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('tagsHistory')!);

    if (this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);
  }
}
