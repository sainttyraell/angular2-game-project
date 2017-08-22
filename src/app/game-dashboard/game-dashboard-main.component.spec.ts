import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDashboardMainComponent } from './game-dashboard-main.component';

describe('GameDashboardMainComponent', () => {
  let component: GameDashboardMainComponent;
  let fixture: ComponentFixture<GameDashboardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDashboardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
