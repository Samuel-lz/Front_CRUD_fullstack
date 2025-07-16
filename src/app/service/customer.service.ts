import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private api : string = 'http://localhost:8080/api/customers';

  constructor(private http:HttpClient) { }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.api);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.api, customer);
  }
}
