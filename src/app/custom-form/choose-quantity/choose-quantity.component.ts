import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuantityComponent
    }
  ]
})
export class ChooseQuantityComponent implements OnInit, ControlValueAccessor {

  quantity = 0;
  touched = false;
  disabled = false;

  onChange = (quantity: number) => {};
  onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.markAsTouched();
    if(this.disabled) { return; }
    this.quantity++;
    this.onChange(this.quantity);
  }

  onRemove() {
    this.markAsTouched();
    if(this.disabled) { return; }
    this.quantity--;
    this.onChange(this.quantity);
  }

  markAsTouched() {
    if(!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(quantity: any): void {
    this.quantity = quantity;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
