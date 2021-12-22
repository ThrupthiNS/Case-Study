import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaskcaseComponent } from './updatetaskcase.component';

describe('UpdatetaskcaseComponent', () => {
  let component: UpdatetaskcaseComponent;
  let fixture: ComponentFixture<UpdatetaskcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetaskcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
