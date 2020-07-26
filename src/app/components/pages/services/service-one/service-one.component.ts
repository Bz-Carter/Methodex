import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../blog-one/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.scss']
})
export class ServiceOneComponent implements OnInit {

  title = "Prestations part 1";

  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`);
  }

}
