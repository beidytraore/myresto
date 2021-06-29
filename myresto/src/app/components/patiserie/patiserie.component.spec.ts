import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiserieComponent } from './patiserie.component';

describe('PatiserieComponent', () => {
  let component: PatiserieComponent;
  let fixture: ComponentFixture<PatiserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatiserieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
