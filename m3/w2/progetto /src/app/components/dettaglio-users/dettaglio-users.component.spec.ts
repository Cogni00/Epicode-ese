import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioUsersComponent } from './dettaglio-users.component';

describe('DettaglioUsersComponent', () => {
  let component: DettaglioUsersComponent;
  let fixture: ComponentFixture<DettaglioUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
