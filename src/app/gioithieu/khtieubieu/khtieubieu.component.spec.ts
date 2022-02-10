import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhtieubieuComponent } from './khtieubieu.component';

describe('KhtieubieuComponent', () => {
  let component: KhtieubieuComponent;
  let fixture: ComponentFixture<KhtieubieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhtieubieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhtieubieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
