import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLoginComponent } from './game-login.component';

describe('GameLoginComponent', () => {
  let component: GameLoginComponent;
  let fixture: ComponentFixture<GameLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
