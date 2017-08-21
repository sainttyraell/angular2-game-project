import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLoginFormComponent } from './game-login-form.component';

describe('GameLoginFormComponent', () => {
  let component: GameLoginFormComponent;
  let fixture: ComponentFixture<GameLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
