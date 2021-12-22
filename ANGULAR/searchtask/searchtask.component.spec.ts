import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtaskComponent } from './searchtask.component';

describe('SearchtaskComponent', () => {
  let component: SearchtaskComponent;
  let fixture: ComponentFixture<SearchtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
