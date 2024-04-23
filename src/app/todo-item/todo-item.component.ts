import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() toDoTaskItem: IToDoItem;

  @Output() onDone: EventEmitter<number> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onChange: EventEmitter<IToDoItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  done(id: number): void {
    this.onDone.emit(id);
  }

  deleteToDoTask(id: number): void {
    this.onDelete.emit(id);
  }

  changeToDoTask(): void {
    this.onChange.emit(this.toDoTaskItem);
  }
}
