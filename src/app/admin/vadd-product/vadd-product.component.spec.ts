import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaddProductComponent } from './vadd-product.component';

describe('VaddProductComponent', () => {
  let component: VaddProductComponent;
  let fixture: ComponentFixture<VaddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
