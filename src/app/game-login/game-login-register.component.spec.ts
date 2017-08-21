import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLoginRegisterComponent } from './game-login-register.component';

describe('GameLoginRegisterComponent', () => {
  let component: GameLoginRegisterComponent;
  let fixture: ComponentFixture<GameLoginRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLoginRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
