import { Component, OnInit } from '@angular/core';
// import projectData from '../../data/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  projects = [
    {
      "name": "Mini-shell",
      "discription": "this is a wethinkcode project blah blah basically a simplified terminal projects lol",
      "image": "",
      "urlLink": 'https://www.facebook.com'
  },
  {
      "name": "Perosnl Site",
      "discription": "VIOLA c'est la site que tu voir maintenant ici sur cette website! c'est oncroyable non?",
      "image": "../../../assests/images/PS.jpg",
      "urlLink": 'https://www.facebook.com'
  },
  {
      "name": "iDIM",
      "discription": "kek cette application est la bain du mon existance a ce moment !",
      "image": "",
      "urlLink": 'https://www.facebook.com'
  },
  {
      "name": "Fresh-Eats",
      "discription": "Social tech project created during my final year at wethinkcode for an SME company. It is an inventory management system as well as online ordering webb app",
      "image": "",
      "urlLink": ""
  },
  {
      "name": "Pokedex Project",
      "discription": "",
      "image": "",
      "urlLink": 'https://www.facebook.com'
  },
  {
    "name": "Project 6",
    "discription": "asd asd ghsthdfghdf aasd f e efzsdafasdf ",
    "image": "",
    "urlLink": ""
}
];

}
