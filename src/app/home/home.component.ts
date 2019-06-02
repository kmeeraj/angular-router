import { Component, OnInit } from '@angular/core';
import {lessonsData} from '../../data/lessonsData';
import {Lesson} from '../model/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lessons: any;

  constructor() { }

  ngOnInit() {
    this.lessons = lessonsData.lessons;
  }

}
