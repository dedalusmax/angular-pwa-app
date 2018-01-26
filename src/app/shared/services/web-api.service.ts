import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

 import { HttpService } from './http.service';

@Injectable()
export class WebApiService {
    constructor(private httpService: HttpService) { }

    getList(apiPath: string) {
        return this.httpService.get(apiPath)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    get(apiPath: string, id: number) {
        return this.httpService.get(apiPath + '/' + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    save<T>(apiPath: string, data: T) {
        return this.httpService.post(apiPath, data)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    edit<T>(apiPath: string, id: number, data: T) {
        return this.httpService.put(apiPath + '/' + id, data)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    delete(apiPath: string, id: any) {
        return this.httpService.delete(apiPath + '/' + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }
}
