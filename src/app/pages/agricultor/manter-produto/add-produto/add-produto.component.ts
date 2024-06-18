import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrimaryInputComponent } from "../../../../components/primary-input/primary-input.component";
import { ComboBoxInputComponent } from "../../../../components/combo-box-input/combo-box-input.component";
import { ProdutoService } from "../../../../services/produto.service";
import { ProdutoDtoType } from "../../../../types/produto-dto.type";
import {MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatLabel, MatSelect} from "@angular/material/select";
import {AgricultorService} from "../../../../services/agricultor.service";
import {Observable, of} from "rxjs";

interface ProdutoForm {
  nome: FormControl<string>;
  preco: FormControl<number>;
  pesoEstimado: FormControl<number>;
  unidadePeso: FormControl<string>;
  capacidadeProdutiva: FormControl<number>;
  unidadeCapacidade: FormControl<string>;
  tempoCapacidade: FormControl<string>;
  prazoEntrega: FormControl<number>;
  tempoEntrega: FormControl<string>;
  descricao: FormControl<string>;
  categoria: FormControl<string>;
  uploadFoto: FormControl;
  typeFoto: FormControl;
}

@Component({
  selector: 'app-add-produto',
  standalone: true,
  imports: [
    PrimaryInputComponent,
    ReactiveFormsModule,
    ComboBoxInputComponent,
    MatOption,
    MatSelect,
    MatFormField,
    MatLabel
  ],
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.scss']
})
export class AddProdutoComponent {
  form: FormGroup<ProdutoForm>;
  imagemSelecionada: string | ArrayBuffer | null = null;
  idAgricultor: number = 0;

  constructor(
    private router: Router,
    private toastService: ToastrService,
    private produtoService: ProdutoService,
    private agricultorService: AgricultorService
  ) {
    this.form = new FormGroup({
      nome: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      preco: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      pesoEstimado: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      unidadePeso: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      capacidadeProdutiva: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      unidadeCapacidade: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      tempoCapacidade: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      prazoEntrega: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      tempoEntrega: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      descricao: new FormControl<string>('', {
        validators: [Validators.required, Validators.maxLength(300)],
        nonNullable: true
      }),
      categoria: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      uploadFoto: new FormControl(''),
      typeFoto: new FormControl('')
    });
  }


  navigateToProduto() {
    this.router.navigate(['/manter-produto']);
  }

  salvar() {
    if (this.form.invalid) {
      this.toastService.error('Preencha todos os campos obrigatórios');
      return;
    }
    this.getIdAgricultor();

    console.log(this.idAgricultor)

    const produto: ProdutoDtoType = {
      titulo: this.form.value.nome as string,
      descricao: this.form.value.descricao as string,
      precoUnitario: this.form.value.preco as number,
      pesoEstimado: this.form.value.pesoEstimado as number,
      unidadePeso: this.form.value.unidadePeso as string,
      capacidadeProdutiva: this.form.value.capacidadeProdutiva as number,
      unidadeCapacidade: this.form.value.unidadeCapacidade as string,
      tempoCapacidade: this.form.value.tempoCapacidade as string,
      prazoEntrega: this.form.value.prazoEntrega as number,
      unidadePrazo: this.form.value.tempoEntrega as string,
      categoria: this.form.value.categoria as string ,
      idAgricultor: this.idAgricultor,
      uploadFoto: this.form.value.uploadFoto,
      typeFoto: this.form.value.typeFoto,
      status: true
    };

    console.log(produto)

    this.produtoService.createProduto(produto).subscribe(() => {
      this.toastService.success('Produto cadastrado com sucesso');
      this.navigateToProduto();
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const validImageTypes = ['image/jpeg', 'image/png'];
      if (!validImageTypes.includes(file.type)) {
        this.toastService.error('Por favor, selecione um arquivo de imagem válido (PNG ou JPEG).');
        this.form.patchValue({
          uploadFoto: null,
          typeFoto: null
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const byteArray = new Uint8Array(reader.result as ArrayBuffer);
        const base64String = btoa(String.fromCharCode(...byteArray));
        this.imagemSelecionada = `data:${file.type};base64,${base64String}`;
        this.form.patchValue({
          uploadFoto: base64String,
          typeFoto: file.type
        });
      };

      reader.readAsArrayBuffer(file);
    }
  }

  private getIdAgricultor() {
    this.agricultorService.getIdAgricultorByEmail().subscribe((id) => {
      this.idAgricultor = id as unknown as number;
      console.log(this.idAgricultor)
    });
  }
}
