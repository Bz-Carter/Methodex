import { Component, OnInit } from '@angular/core';
import { SharedService } from '../blog-one/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

  title = "Accueil";

  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`);
  }

}
