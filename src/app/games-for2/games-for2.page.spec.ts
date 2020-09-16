import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamesFor2Page } from './games-for2.page';

describe('GamesFor2Page', () => {
  let component: GamesFor2Page;
  let fixture: ComponentFixture<GamesFor2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesFor2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesFor2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
