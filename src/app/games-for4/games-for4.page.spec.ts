import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamesFor4Page } from './games-for4.page';

describe('GamesFor4Page', () => {
  let component: GamesFor4Page;
  let fixture: ComponentFixture<GamesFor4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesFor4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesFor4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
