import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() iqView: boolean;
  @Input() telView: boolean;
  @Input() feView: boolean;
  @Input() tel2View: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
