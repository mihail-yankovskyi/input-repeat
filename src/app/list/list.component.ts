import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() toDoTasksList: IToDoItem[];

  @Output() onDone: EventEmitter<number> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onChange: EventEmitter<IToDoItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  done(id: number): void {
    this.onDone.emit(id);
  }

  deleteToDoTask(id: number): void{
    this.onDelete.emit(id);
  }

  change(changeToDoTask: IToDoItem): void {
    this.onChange.emit(changeToDoTask);
  }
}
