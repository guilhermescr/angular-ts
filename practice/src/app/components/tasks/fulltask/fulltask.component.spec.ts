import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltaskComponent } from './fulltask.component';

describe('FulltaskComponent', () => {
  let component: FulltaskComponent;
  let fixture: ComponentFixture<FulltaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FulltaskComponent]
    });
    fixture = TestBed.createComponent(FulltaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
