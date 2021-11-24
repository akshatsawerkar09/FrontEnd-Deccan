import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockAccountsComponent } from './unlock-accounts.component';

describe('UnlockAccountsComponent', () => {
  let component: UnlockAccountsComponent;
  let fixture: ComponentFixture<UnlockAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
