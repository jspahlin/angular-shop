import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColorSelectorComponent } from './card-color-selector.component';

describe('CardColorSelectorComponent', () => {
  let component: CardColorSelectorComponent;
  let fixture: ComponentFixture<CardColorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
