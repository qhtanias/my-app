import { Component } from '@angular/core';
// Import your header component (adjust the path if necessary)
import { Header } from './header/header'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [
    Header, // <--- Add it here
    // ... any other imports
  ]
})
export class App {
  // ...
}