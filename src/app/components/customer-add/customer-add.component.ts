import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  imports: [],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {

  }


}
