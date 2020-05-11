import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroProdutoComponent } from './modal-cadastro-produto.component';

describe('ModalCadastroProdutoComponent', () => {
  let component: ModalCadastroProdutoComponent;
  let fixture: ComponentFixture<ModalCadastroProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCadastroProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
