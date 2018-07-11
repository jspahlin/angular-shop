import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeSelectorComponent } from './card-type-selector.component';

describe('CardTypeSelectorComponent', () => {
  let component: CardTypeSelectorComponent;
  let fixture: ComponentFixture<CardTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
