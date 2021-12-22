import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetaskcaseComponent } from './deletetaskcase.component';

describe('DeletetaskcaseComponent', () => {
  let component: DeletetaskcaseComponent;
  let fixture: ComponentFixture<DeletetaskcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetaskcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetaskcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
