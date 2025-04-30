import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent  implements OnInit
{
  taskTitle : string = '';
  tasks: Task [] = [];
  // Task = from model.ts file

  ngOnInit(): void {
    const storedTasks = localStorage.getItem('task')
    this.tasks = storedTasks ? JSON.parse(storedTasks) : []
    
  }
  

  addTask(){
    if(this.taskTitle){
      const newTask: Task = {
        id: Date.now(),
        title: this.taskTitle,
        completed: false
      }
      this.tasks.push(newTask);
      this.taskTitle = '';
      this.saveTasks();
      
    }

  }

  onDelete(id: number){
   this.tasks = this.tasks.filter(task => task.id !== id)
   this.saveTasks()

  }

  // to store data in localstorage
   saveTasks(){
    localStorage.setItem('task', JSON.stringify(this.tasks))
   }



  


}
