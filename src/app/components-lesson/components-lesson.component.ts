import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-lesson',
  templateUrl: './components-lesson.component.html',
  styleUrls: ['./components-lesson.component.sass']
})
export class ComponentsLessonComponent implements OnInit {

  inputValue = '';
  constructor() { }
  onInput(event?) {
    console.log('Event - ', event);
    this.inputValue = event.target.value;
  }
  ngOnInit() {
  }

}
