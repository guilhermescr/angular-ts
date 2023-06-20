import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingAngularMaterialComponent } from './testing-angular-material.component';

describe('TestingAngularMaterialComponent', () => {
  let component: TestingAngularMaterialComponent;
  let fixture: ComponentFixture<TestingAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingAngularMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
