import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() valueFromInput: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  inputField: FormControl = new FormControl('', Validators.required);

  getValueFromInput(): void {
    this.valueFromInput.emit(this.inputField.value);
    this.inputField.setValue('');
  }

}
