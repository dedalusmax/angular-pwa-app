import { Injectable } from '@angular/core';

import { WebApiService } from './web-api.service';
import { BASE_URL } from '../../../environments/environment';

import { Currency } from '../models/currency';

@Injectable()
export class CurrencyService {

    private apiPath: string;

    constructor(private webApiService: WebApiService) {
        this.apiPath = BASE_URL + 'Currency';
    }

    getCurrencies = () => {
        return this.webApiService.getList(this.apiPath);
    }
}
