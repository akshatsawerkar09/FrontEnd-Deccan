import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedBatchesComponent } from './rejected-batches.component';

describe('RejectedBatchesComponent', () => {
  let component: RejectedBatchesComponent;
  let fixture: ComponentFixture<RejectedBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedBatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
