import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedBatchesComponent } from './approved-batches.component';

describe('ApprovedBatchesComponent', () => {
  let component: ApprovedBatchesComponent;
  let fixture: ComponentFixture<ApprovedBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedBatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
