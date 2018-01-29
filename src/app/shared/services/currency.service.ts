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

    saveCurrency = (currency: Currency) => {
        if (navigator.onLine) {
            return this.webApiService.save(this.apiPath, currency);
        } else {
            // open cache
            caches.open('ngsw:1:data:dynamic:api-freshness:cache').then(function (cache) {
                cache.match('http://localhost:51738/api/v1/Currency').then(function (result) {
                    console.log(result.text());
                    result.text().then(function (value) {
                        console.log(value);
                    });
                });

            });
                // find currencies
                // add currency in the cache
        }
    }
}
