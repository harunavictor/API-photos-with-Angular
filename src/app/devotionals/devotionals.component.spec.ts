import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionalsComponent } from './devotionals.component';

describe('DevotionalsComponent', () => {
  let component: DevotionalsComponent;
  let fixture: ComponentFixture<DevotionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevotionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevotionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
