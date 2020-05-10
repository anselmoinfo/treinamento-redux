import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalizadorComponent } from './totalizador.component';

describe('TotalizadorComponent', () => {
  let component: TotalizadorComponent;
  let fixture: ComponentFixture<TotalizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
