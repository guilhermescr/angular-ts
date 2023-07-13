import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTestSuiteComponent } from './first-test-suite.component';

describe('FirstTestSuiteComponent', () => {
  let component: FirstTestSuiteComponent;
  let fixture: ComponentFixture<FirstTestSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstTestSuiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstTestSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
