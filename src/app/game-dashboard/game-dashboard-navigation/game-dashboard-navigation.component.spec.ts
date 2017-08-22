import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDashboardNavigationComponent } from './game-dashboard-navigation.component';

describe('GameDashboardNavigationComponent', () => {
  let component: GameDashboardNavigationComponent;
  let fixture: ComponentFixture<GameDashboardNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDashboardNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDashboardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
