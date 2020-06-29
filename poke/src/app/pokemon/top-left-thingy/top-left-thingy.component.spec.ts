import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftThingyComponent } from './top-left-thingy.component';

describe('TopLeftThingyComponent', () => {
  let component: TopLeftThingyComponent;
  let fixture: ComponentFixture<TopLeftThingyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLeftThingyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftThingyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
