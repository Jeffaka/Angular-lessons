import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLessonComponent } from './components-lesson.component';

describe('ComponentsLessonComponent', () => {
  let component: ComponentsLessonComponent;
  let fixture: ComponentFixture<ComponentsLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
