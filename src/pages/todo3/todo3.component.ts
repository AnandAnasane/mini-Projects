import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/model';

@Component({
  selector: 'app-todo3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo3.component.html',
  styleUrl: './todo3.component.css'
})
export class Todo3Component implements OnInit{

  ngOnInit(): void {
    const savedTsk = localStorage.getItem('todo3')
    this.tasks = savedTsk ? JSON.parse(savedTsk) : []
  }

  taskTitle: string = '';
  tasks : Task[] = [];

  addTask(){

    if(this.taskTitle){
      
    const newTask = {
      id: Date.now(),
      title: this.taskTitle,
      completed: false,
    }
    this.tasks.push(newTask)
    this.taskTitle = ''
    this.onSave()
    }

  }

  editTaskId: number | null = null ;
  onEdit(id: number){
    const editTask = this.tasks.find( e => e.id == id)

    if(editTask){
      this.taskTitle = editTask.title,
      this.editTaskId = editTask.id
    }
  }

  onUpdate(){

    if(this.editTaskId !== null){
      const updatedId = this.tasks.find(e => e.id == this.editTaskId)

      if(updatedId){
        updatedId.title = this.taskTitle
      }
    }
    this.editTaskId = null;
    this.taskTitle = '';
    this.onSave()

  }

  onDelete(id: number){
    this.tasks = this.tasks.filter(e => e.id !== id)
    this.taskTitle = '',
    this.editTaskId = null
    this.onSave()

  }

onSave(){
      localStorage.setItem('todo3', JSON.stringify(this.tasks))
}



}
