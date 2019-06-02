import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {

  @Input()
  lessons = [];

  constructor() { }

  ngOnInit() {
  }

}
