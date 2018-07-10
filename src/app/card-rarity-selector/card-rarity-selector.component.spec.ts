import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRaritySelectorComponent } from './card-rarity-selector.component';

describe('CardRaritySelectorComponent', () => {
  let component: CardRaritySelectorComponent;
  let fixture: ComponentFixture<CardRaritySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRaritySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRaritySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
