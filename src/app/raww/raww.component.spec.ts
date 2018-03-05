import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawwComponent } from './raww.component';

describe('RawwComponent', () => {
  let component: RawwComponent;
  let fixture: ComponentFixture<RawwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
