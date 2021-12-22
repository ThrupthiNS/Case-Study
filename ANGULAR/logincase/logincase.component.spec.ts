import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincaseComponent } from './logincase.component';

describe('LogincaseComponent', () => {
  let component: LogincaseComponent;
  let fixture: ComponentFixture<LogincaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
