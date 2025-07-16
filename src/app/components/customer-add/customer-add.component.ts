import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-add',
  imports: [FormsModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements OnInit {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private customerService : CustomerService) { }
  ngOnInit(): void {

  }
  

  addCustomer() {
    const customer = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    console.log(customer);
    this.customerService.createCustomer(customer).subscribe(
      res => console.log(res)
    );
  }
}
