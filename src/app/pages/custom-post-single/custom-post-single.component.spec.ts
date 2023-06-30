import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPostSingleComponent } from './custom-post-single.component';

describe('CustomPostSingleComponent', () => {
  let component: CustomPostSingleComponent;
  let fixture: ComponentFixture<CustomPostSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPostSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPostSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
