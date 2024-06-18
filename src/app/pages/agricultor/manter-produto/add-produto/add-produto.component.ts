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
  byteFoto: FormControl;
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
export class AddProdutoComponent implements OnInit {
  form: FormGroup; // Removido o tipo do FormGroup para simplificar

  imagemSelecionada: string | ArrayBuffer | null = null;
  idAgricultor: number = 0;

  constructor(
    private router: Router,
    private toastService: ToastrService,
    private produtoService: ProdutoService,
    private agricultorService: AgricultorService
  ) {
    this.form = new FormGroup({
      nome: new FormControl('', { validators: Validators.required }),
      preco: new FormControl(0, { validators: Validators.required }),
      pesoEstimado: new FormControl(0, { validators: Validators.required }),
      unidadePeso: new FormControl('', { validators: Validators.required }),
      capacidadeProdutiva: new FormControl(0, { validators: Validators.required }),
      unidadeCapacidade: new FormControl('', { validators: Validators.required }),
      tempoCapacidade: new FormControl('', { validators: Validators.required }),
      prazoEntrega: new FormControl(0, { validators: Validators.required }),
      tempoEntrega: new FormControl('', { validators: Validators.required }),
      descricao: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(300)]
      }),
      categoria: new FormControl('', { validators: Validators.required }),
      byteFoto: new FormControl(null), // Tipo ArrayBuffer para byteFoto
      typeFoto: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getIdAgricultor();
  }

  salvar() {
    if (this.form.invalid) {
      this.toastService.error('Preencha todos os campos obrigatórios');
      return;
    }

    const arrayBuffer = this.form.value.byteFoto;
    const byteArray = new Uint8Array(arrayBuffer);
    const byteArrayList = Array.from(byteArray) as number[];

    const produto: ProdutoDtoType = {
      titulo: this.form.value.nome,
      descricao: this.form.value.descricao,
      precoUnitario: this.form.value.preco,
      pesoEstimado: this.form.value.pesoEstimado,
      unidadePeso: this.form.value.unidadePeso,
      capacidadeProdutiva: this.form.value.capacidadeProdutiva,
      unidadeCapacidade: this.form.value.unidadeCapacidade,
      tempoCapacidade: this.form.value.tempoCapacidade,
      prazoEntrega: this.form.value.prazoEntrega,
      unidadePrazo: this.form.value.tempoEntrega,
      categoria: this.form.value.categoria,
      idAgricultor: this.idAgricultor,
      byteFoto: byteArrayList,
      typeFoto: this.form.value.typeFoto,
      status: true
    };

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
          byteFoto: null,
          typeFoto: null
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer; // Lê como ArrayBuffer diretamente
        this.imagemSelecionada = `data:${file.type};base64,${btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))}`;
        this.form.patchValue({
          byteFoto: arrayBuffer,
          typeFoto: file.type
        });
      };

      reader.readAsArrayBuffer(file);
    }
  }

  private getIdAgricultor() {
    this.agricultorService.getIdAgricultorByEmail().subscribe(id => {
      this.idAgricultor = id as unknown as number;
    });
  }

  navigateToProduto() {
    this.router.navigate(['/manter-produto']);
  }
}
