import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'app-change-input',
  templateUrl: './change-input.component.html',
  styleUrls: ['./change-input.component.scss']
})
export class ChangeInputComponent implements OnInit {

  @Input() toEdit: IToDoItem;

  @Output() valueFromChangeInput: EventEmitter<IToDoItem> = new EventEmitter();

  ngOnInit(): void {
    this.inputField.setValue(this.toEdit.text);
  }

  inputField: FormControl = new FormControl('', Validators.required);

  getValueFromChangeInput(): void {
    const updatedToDo: IToDoItem = {
      ...this.toEdit,
      text: this.inputField.value
    };
    // const updatedToDo: IToDoItem = {...this.toEdit, text: this.inputField.value};

    this.valueFromChangeInput.emit(updatedToDo);
    this.inputField.setValue('');
  }
}
