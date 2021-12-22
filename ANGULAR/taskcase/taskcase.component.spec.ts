import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcaseComponent } from './taskcase.component';

describe('TaskcaseComponent', () => {
  let component: TaskcaseComponent;
  let fixture: ComponentFixture<TaskcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
