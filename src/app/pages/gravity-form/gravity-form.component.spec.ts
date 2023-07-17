import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravityFormComponent } from './gravity-form.component';

describe('GravityFormComponent', () => {
  let component: GravityFormComponent;
  let fixture: ComponentFixture<GravityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GravityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GravityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
