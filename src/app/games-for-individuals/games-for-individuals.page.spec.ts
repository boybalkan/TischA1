import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamesForIndividualsPage } from './games-for-individuals.page';

describe('GamesForIndividualsPage', () => {
  let component: GamesForIndividualsPage;
  let fixture: ComponentFixture<GamesForIndividualsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesForIndividualsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesForIndividualsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
