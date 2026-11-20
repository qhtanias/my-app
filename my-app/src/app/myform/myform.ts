import { Component } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.html',
  standalone: true,
  // imports: [...]
})
export class Myform {
  
  // Add the missing method
  submitForm(name: string) {
    console.log('Form submitted with name:', name);
    // Add your logic here (e.g., calling a service)
  }
}