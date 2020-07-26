import { Component, OnInit } from '@angular/core';
import { SharedService } from '../blog-one/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-one',
  templateUrl: './about-one.component.html',
  styleUrls: ['./about-one.component.scss']
})
export class AboutOneComponent implements OnInit {

  title ="A propos"

  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`);
  }

}
