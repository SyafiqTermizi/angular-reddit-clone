import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfunnyComponent } from './rfunny.component';

describe('RfunnyComponent', () => {
  let component: RfunnyComponent;
  let fixture: ComponentFixture<RfunnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfunnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfunnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
