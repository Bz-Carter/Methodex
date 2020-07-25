import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARTICLES } from './mock-articles';
import { Articles } from './articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Articles[]> {
    const articles: Articles[] = ARTICLES;
    return of(articles);
  }

  getArticle(key: string): Observable<Articles> {
    const articles: Articles[] = ARTICLES.filter(a => a.key === key);
    return of(articles[0]);
  }
}
