import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSportsComponent } from './update-sports.component';

describe('UpdateSportsComponent', () => {
  let component: UpdateSportsComponent;
  let fixture: ComponentFixture<UpdateSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
