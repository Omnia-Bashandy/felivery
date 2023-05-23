import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehomeComponent } from './storehome.component';

describe('StorehomeComponent', () => {
  let component: StorehomeComponent;
  let fixture: ComponentFixture<StorehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorehomeComponent]
    });
    fixture = TestBed.createComponent(StorehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
