import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedBatchesComponent } from './applied-batches.component';

describe('AppliedBatchesComponent', () => {
  let component: AppliedBatchesComponent;
  let fixture: ComponentFixture<AppliedBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedBatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
