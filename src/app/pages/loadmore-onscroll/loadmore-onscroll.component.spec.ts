import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadmoreOnscrollComponent } from './loadmore-onscroll.component';

describe('LoadmoreOnscrollComponent', () => {
  let component: LoadmoreOnscrollComponent;
  let fixture: ComponentFixture<LoadmoreOnscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadmoreOnscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadmoreOnscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
