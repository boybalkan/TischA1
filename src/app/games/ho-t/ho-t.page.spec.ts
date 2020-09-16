import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoTPage } from './ho-t.page';

describe('HoTPage', () => {
  let component: HoTPage;
  let fixture: ComponentFixture<HoTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
