import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { TodoComponent } from '../pages/todo/todo.component';
import { Todo2Component } from '../pages/todo2/todo2.component';
import { Todo3Component } from '../pages/todo3/todo3.component';

export const routes: Routes = [
    {   path: '', 
        component: HomeComponent, 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'todo2',
        component: Todo2Component
    },
    {
        path: 'todo3',
        component: Todo3Component
    }


];
