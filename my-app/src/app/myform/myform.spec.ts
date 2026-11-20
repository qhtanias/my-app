import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css'],
})
export class MyformComponent {
  name: string = '';

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log('Submitted name:', this.name);
      // call your service here, e.g.:
      // this.customerService.save({ name: this.name }).subscribe(...);
      form.resetForm();
    }
  }
}