import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/model';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo2',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './todo2.component.html',
  styleUrl: './todo2.component.css'
})
export class Todo2Component implements OnInit{

  ngOnInit(): void {
   const completedTask = localStorage.getItem('todo')
   this.tasks = completedTask ? JSON.parse(completedTask) : []
  }

  taskTitle : string = '';
  tasks: Task [] = [];

  addTask(){
    const newTask : Task = {
      id: Date.now(),
      title: this.taskTitle.toUpperCase(),
      completed: false
    }
    this.tasks.push(newTask);
    this.taskTitle = '';
    this.onSave();
  }

  onDelete(id: number){
    this.tasks = this.tasks.filter(e => e.id !== id);
    this.onSave()  
  }

  editTaskId : number | null = null ;
  onEdit(id: number){
    const editTask = this.tasks.find(e => e.id === id)

    if(editTask){
      this.taskTitle = editTask.title
      this.editTaskId = editTask.id
    }
  }

  onUpdate(){

    if(this.editTaskId !== null){
      const updatedId = this.tasks.find(e => e.id === this.editTaskId)
      if(updatedId){
        updatedId.title = this.taskTitle.toUpperCase()
      }
    }
    this.editTaskId = null
    this.taskTitle = ''
    this.onSave()

  }




 
  onSave(){
    localStorage.setItem('todo',JSON.stringify(this.tasks))
  }
  
}
