import { Component, OnInit } from '@angular/core';
import { Articles } from './articles';
import { ARTICLES } from './mock-articles';
import { ArticleService } from './article.service';
import { SharedService } from './shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.scss']
})
export class BlogOneComponent implements OnInit {

  title = "Actualités";

  articles: Articles[] = [];

  constructor(
    private ArticleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`);
    this.getAticles();
  }

  getAticles(): void {
    this.ArticleService.getArticles().subscribe(articles => this.articles = articles)
  }

}
