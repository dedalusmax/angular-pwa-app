import { Injectable } from '@angular/core';

import { WebApiService } from './web-api.service';
import { BASE_URL } from '../../../environments/environment';

import { User } from '../models/user';

@Injectable()
export class UserService {

    private apiPath: string;

    constructor(private webApiService: WebApiService) {
        this.apiPath = BASE_URL + 'User';
    }

    getUsers = () => {
        return this.webApiService.getList(this.apiPath);
    }

    // getCustomer(customerId: number) {
    //     return this.webApiService.get(this.apiPath, customerId);
    // }

    // saveCustomer = (customer: Customer) => {
    //     return this.webApiService.save(this.apiPath, customer);
    // }

    // editCustomer = (customer: Customer) => {
    //     return this.webApiService.edit(this.apiPath, customer.customerId, customer);
    // }

    // deleteCustomer = (customerId: number) => {
    //     return this.webApiService.delete(this.apiPath, customerId);
    // }
}
