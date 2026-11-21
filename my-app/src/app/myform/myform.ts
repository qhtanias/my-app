import { Myform2Component } from '../myform2/myform2';
import { Component } from '@angular/core';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.html',
  imports: [Myform2Component], // add here
  standalone: true
})
