import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinateComponent } from './pageinate.component';

describe('PageinateComponent', () => {
  let component: PageinateComponent;
  let fixture: ComponentFixture<PageinateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageinateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
