import { Component, OnInit } from '@angular/core';
import { Articles } from '../blog-one/articles';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../blog-one/article.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  article: Articles = new Articles();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.articleService.getArticle(key).subscribe(article => {
        if(article === undefined)
        {
          this.router.navigateByUrl('error');
          return;
        }
          this.article = article;
          console.log(this.article);
        }
      );
      
    })
  }

}
