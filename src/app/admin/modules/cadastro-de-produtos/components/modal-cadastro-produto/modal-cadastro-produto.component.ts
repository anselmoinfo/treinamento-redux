import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/admin/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-modal-cadastro-produto',
  templateUrl: './modal-cadastro-produto.component.html',
  styleUrls: ['./modal-cadastro-produto.component.scss'],
})
export class ModalCadastroProdutoComponent implements OnInit {
  formGroup: FormGroup;
  titulo: string;
  idProduto: number;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalCadastroProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto?: Produto
  ) {}

  cancelar(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      nome: [],
      img: [],
      preco: [],
      qtd: [],
    });
  }

  onSubmit(post: Produto) {
    post.id = this.idProduto;
    this.dialogRef.close(post);
  }

  ngOnInit(): void {
    this.createForm();
    if (this.produto) {
      this.formGroup.patchValue(this.produto);
      this.titulo = 'Editar Produto';
      this.idProduto = this.produto.id;
    } else {
      this.titulo = 'Cadastrar Produto';
    }
  }
}
