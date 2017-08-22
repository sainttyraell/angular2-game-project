import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCharacterCreateComponent } from './game-character-create.component';

describe('GameCharacterCreateComponent', () => {
  let component: GameCharacterCreateComponent;
  let fixture: ComponentFixture<GameCharacterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCharacterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCharacterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
