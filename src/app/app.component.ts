import { Component } from '@angular/core';
import { IToDoItem } from './interfaces/IToDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Input-repeat';

  toDoTasks: IToDoItem[] = [];
  id = 0;
  showInput: boolean = true;
  toDoItemToEdit: IToDoItem;

  onAddToDo(inputText: string): void {
    // console.log(string);
    // console.log('Its here');
    this.id++;
    this.toDoTasks.push({ id: this.id, text: inputText, isDone: false });
    // console.log(this.toDoTasks);
  }

  onDoneApp(id: number): void {
    // let toDoTask: IToDoItem[] = {...this.toDoTasks};
    // console.log(toDoTask);
    // let toDoTask = this.toDoTasks.findIndex((id) => id === id);
    // console.log(toDoTask);

    const index = this.toDoTasks.findIndex((item) => item.id === id);
    const toDoTask = {...this.toDoTasks[index]};

    toDoTask.isDone = !toDoTask.isDone;

    this.toDoTasks = this.toDoTasks.map((currentToDoTask) => {
      if (currentToDoTask.id === toDoTask.id) {
      return toDoTask;
      }
      return currentToDoTask;
    })
  }

  deleteToDoTask(id: number) {
    this.toDoTasks = this.toDoTasks.filter((currentToDoTask) => currentToDoTask.id !== id);
  }

  change(changeToDoTask: IToDoItem): void {
    this.showInput = false;
    this.toDoItemToEdit = changeToDoTask;
  }

  onChangeInputButton(changedToDoTask: IToDoItem): void {
    this.toDoTasks = this.toDoTasks.map( (currentToDoTask) => {
      if (currentToDoTask.id === changedToDoTask.id) {
        return changedToDoTask;
      }
      return currentToDoTask;
    })

    this.showInput = true;
  }
}
