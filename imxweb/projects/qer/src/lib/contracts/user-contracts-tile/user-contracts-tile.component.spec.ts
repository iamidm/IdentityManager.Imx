import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContractsTileComponent } from './user-contracts-tile.component';

describe('UserContractsTileComponent', () => {
  let component: UserContractsTileComponent;
  let fixture: ComponentFixture<UserContractsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContractsTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContractsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
