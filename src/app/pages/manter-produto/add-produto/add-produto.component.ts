import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { ComboBoxInputComponent } from '../../../components/combo-box-input/combo-box-input.component';

interface ProdutoForm {
  nome: FormControl<string>;
  preco: FormControl<number>;
  pesoEstimado: FormControl<number>;
  unidadePeso: FormControl<string>;
  capacidadeProdutiva: FormControl<number>;
  unidadeCapacidade: FormControl<string>;
  tempoCapacidade: FormControl<number>;
  prazoEntrega: FormControl<number>;
  tempoEntrega: FormControl<string>;
  descricao: FormControl<string>;
}

@Component({
  selector: 'app-add-produto',
  standalone: true,
  imports: [
    PrimaryInputComponent,
    ReactiveFormsModule,
    ComboBoxInputComponent
  ],
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.scss']
})
export class AddProdutoComponent {
  form: FormGroup<ProdutoForm>;

  constructor(
    private router: Router,
    private toastService: ToastrService
  ) {
    this.form = new FormGroup({
      nome: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      preco: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      pesoEstimado: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      unidadePeso: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      capacidadeProdutiva: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      unidadeCapacidade: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      tempoCapacidade: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      prazoEntrega: new FormControl<number>(0, { validators: Validators.required, nonNullable: true }),
      tempoEntrega: new FormControl<string>('', { validators: Validators.required, nonNullable: true }),
      descricao: new FormControl<string>('', { validators: [Validators.required, Validators.maxLength(300)], nonNullable: true })
    });
  }

  navigateToProduto() {
    this.router.navigate(['/manter-produto']);
  }

  salvar() {

  }
}
