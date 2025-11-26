import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-list-angular');
  task:string = "";
  taskList:{id:number, name:string}[] = [];
  addTask(){
    this.taskList.push({id:this.taskList.length + 1, name:this.task});
    this.task = "";
    console.log(this.taskList);
  }
  deleteTask(id:number){
    this.taskList = this.taskList.filter(task => task.id !== id);
  }
}
