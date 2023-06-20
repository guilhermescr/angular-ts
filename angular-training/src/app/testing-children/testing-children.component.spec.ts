import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingChildrenComponent } from './testing-children.component';

describe('TestingChildrenComponent', () => {
  let component: TestingChildrenComponent;
  let fixture: ComponentFixture<TestingChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
