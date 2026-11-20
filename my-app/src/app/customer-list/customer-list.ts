import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngFor

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.html',
  standalone: true,
  imports: [CommonModule] // Make sure CommonModule is imported
})
export class CustomerList {
  // Define your array of customers
  customers = [
    { customerId: 1, name: 'John Doe', email: 'john@example.com', country: 'USA' },
    { customerId: 2, name: 'Jane Smith', email: 'jane@example.com', country: 'UK' }
  ];
}