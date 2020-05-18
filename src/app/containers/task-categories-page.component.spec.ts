import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCategoriesPageComponent } from './task-categories-page.component';

describe('TaskCategoriesPageComponent', () => {
  let component: TaskCategoriesPageComponent;
  let fixture: ComponentFixture<TaskCategoriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCategoriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
