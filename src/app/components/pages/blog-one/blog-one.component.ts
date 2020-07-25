import { Component, OnInit } from '@angular/core';
import { Articles } from './articles';
import { ARTICLES } from './mock-articles';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.scss']
})
export class BlogOneComponent implements OnInit {

  articles: Articles[] = [];

  constructor(private ArticleService: ArticleService) { }

  ngOnInit(): void {
    this.getAticles();
  }

  getAticles(): void {
    this.ArticleService.getArticles().subscribe(articles => this.articles = articles)
  }

}
