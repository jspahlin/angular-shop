import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSetSelectorComponent } from './card-set-selector.component';

describe('CardSetSelectorComponent', () => {
  let component: CardSetSelectorComponent;
  let fixture: ComponentFixture<CardSetSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSetSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSetSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
