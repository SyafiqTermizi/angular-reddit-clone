import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RallComponent } from './rall.component';

describe('RallComponent', () => {
  let component: RallComponent;
  let fixture: ComponentFixture<RallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
