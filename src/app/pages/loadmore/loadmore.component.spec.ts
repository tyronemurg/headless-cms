import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadmoreComponent } from './loadmore.component';

describe('LoadmoreComponent', () => {
  let component: LoadmoreComponent;
  let fixture: ComponentFixture<LoadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
