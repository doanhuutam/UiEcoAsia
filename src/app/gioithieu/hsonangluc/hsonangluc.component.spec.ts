import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsonanglucComponent } from './hsonangluc.component';

describe('HsonanglucComponent', () => {
  let component: HsonanglucComponent;
  let fixture: ComponentFixture<HsonanglucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsonanglucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsonanglucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
