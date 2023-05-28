import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbAuthPageComponent } from './fb-auth-page.component';

describe('FbAuthPageComponent', () => {
  let component: FbAuthPageComponent;
  let fixture: ComponentFixture<FbAuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbAuthPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbAuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
