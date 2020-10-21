import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var projects = [
      {
        name: "P1",
        description: "sublah didi blahnny1",
        image: "$2999",
        url: "www.facebook.com"
      },
      {
        name: "P2",
        description: "sublah didi blahnny2",
        image: "$2999",
        url: "www.facebook.com"
      }
  ];
  }

}
