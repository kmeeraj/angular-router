import { Component, OnInit } from '@angular/core';
import {lessonsData} from '../../data/lessonsData';

@Component({
  selector: 'app-alllessons',
  templateUrl: './alllessons.component.html',
  styleUrls: ['./alllessons.component.scss']
})
export class AlllessonsComponent implements OnInit {

  lessons = lessonsData.lessons;
  constructor() { }

  ngOnInit() {
  }

}
