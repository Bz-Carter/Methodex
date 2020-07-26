import { Component, OnInit } from '@angular/core';
import { SharedService } from '../blog-one/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = "Contact";

  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`);
  }

}
