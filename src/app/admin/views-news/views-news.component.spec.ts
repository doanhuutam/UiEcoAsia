import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsNewsComponent } from './views-news.component';

describe('ViewsNewsComponent', () => {
  let component: ViewsNewsComponent;
  let fixture: ComponentFixture<ViewsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
