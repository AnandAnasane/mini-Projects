import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories = [
    {
      title: '1. Basic Angular Coding Questions',
      items: [
        'Create a component that changes the background color on button click.',
        'Build a simple counter app using Angular.',
        'Show a list of items using *ngFor and add a delete button to remove an item.',
        'Create a two-way binding form using [(ngModel)].',
        'Build a simple CRUD app using Angular with local storage.'
      ]
    },
    {
      title: '2. Intermediate Questions',
      items: [
        'Create a parent and child component and pass data using @Input and @Output.',
        'Use Angular routing to navigate between pages (e.g., Home, About).',
        'Implement form validation using reactive forms.',
        'Call a fake API using HttpClient and display the data.',
        'Use ngClass or ngStyle to apply dynamic styling.'
      ]
    },
    {
      title: '3. Advanced Questions',
      items: [
        'Create a custom directive (e.g., highlight text on hover).',
        'Implement a search filter pipe to filter a list.',
        'Build a service to share data between components.',
        'Lazy load a module and show how Angular handles it.',
        'Use RxJS operators like debounceTime, switchMap, etc., in a search input.'
      ]
    },
    {
      title: '4. Project-Level Tasks',
      items: [
        'Build a Todo App with full CRUD functionality.',
        'Create a Student Portal with routing and local storage.',
        'Develop a small dashboard showing cards and charts (can be mocked).',
        'Handle error responses gracefully using interceptors.'
      ]
    },
    {
      title: '5. Component & Data Binding',
      items: [
        'Create a reusable button component that accepts label and color as input.',
        'Show how to implement conditional rendering using *ngIf and ng-template.',
        'Build a dynamic table component that takes column names and data via @Input.'
      ]
    },
    {
      title: '6. Forms & Validation',
      items: [
        'Create a login form using reactive forms and validate email & password fields.',
        'Implement a dynamic form where fields are added/removed based on user actions.',
        'Disable the submit button unless the form is valid.'
      ]
    },
    {
      title: '7. Routing & Navigation',
      items: [
        'Implement routing with a default page and 404-not-found page.',
        'Add route guards to protect certain routes (e.g., AuthGuard).',
        'Use query parameters to filter data in a component.'
      ]
    },
    {
      title: '8. Services & Dependency Injection',
      items: [
        'Create a service that fetches users from an API and use it in multiple components.',
        'Implement a singleton logging service.',
        'Share data between unrelated components using a shared service with BehaviorSubject.'
      ]
    },
    {
      title: '9. Directives & Pipes',
      items: [
        'Create a structural directive that shows/hides elements based on screen width.',
        'Build a custom pipe to capitalize the first letter of every word.',
        'Create a pipe that filters a list of users by name (case insensitive).'
      ]
    },
    {
      title: '10. State Management / Observables',
      items: [
        'Use RxJS to debounce a search input and make API calls.',
        'Combine two observables and display merged results.',
        'Create a service using Subject to emit and subscribe to values.'
      ]
    },
    {
      title: '11. Miscellaneous / Real-World Scenarios',
      items: [
        'Build a shopping cart with add/remove functionality and total calculation.',
        'Create a stepper form (multi-step form) with form validation.',
        'Implement a dark mode toggle in an Angular app.',
        'Create a countdown timer using Angular and RxJS.',
        'Use Angular animations to fade elements in/out on add/delete.'
      ]
    }
  ];
}