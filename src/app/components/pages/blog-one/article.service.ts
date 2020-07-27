import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Articles } from './articles';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>('http://localhost:8000/articles');
  }

  getArticle(key: string): Observable<Articles> {
    return this.http.get<Articles>('http://localhost:8000/articles/' + key);
  }
}
