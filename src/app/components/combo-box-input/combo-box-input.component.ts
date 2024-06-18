import {Component, Input, forwardRef, EventEmitter, Output} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {NgForOf, NgIf} from "@angular/common";

interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-combo-box-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboBoxInputComponent),
      multi: true
    }
  ],
  templateUrl: './combo-box-input.component.html',
  styleUrls: ['./combo-box-input.component.scss']
})
export class ComboBoxInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() inputName: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() options: SelectOption[] = [];

  @Output() onClickIcon: EventEmitter<void> = new EventEmitter<void>();

  value: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  onSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  clickIcon() {
    this.onClickIcon.emit();
  }
}
