import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowMarkerCustomDirectiveComponent } from './yellow-marker-custom-directive.component';

describe('YellowMarkerCustomDirectiveComponent', () => {
  let component: YellowMarkerCustomDirectiveComponent;
  let fixture: ComponentFixture<YellowMarkerCustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowMarkerCustomDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowMarkerCustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
