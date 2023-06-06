import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbrateusComponent } from './ngbrateus.component';

describe('NgbrateusComponent', () => {
  let component: NgbrateusComponent;
  let fixture: ComponentFixture<NgbrateusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbrateusComponent]
    });
    fixture = TestBed.createComponent(NgbrateusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
