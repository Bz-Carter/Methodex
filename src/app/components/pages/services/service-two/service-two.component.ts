import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../blog-one/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.scss']
})
export class ServiceTwoComponent implements OnInit {

  title = "Prestations part 2";

  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`);
  }

}
