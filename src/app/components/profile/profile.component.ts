import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({duration: 1200});
  }

}
