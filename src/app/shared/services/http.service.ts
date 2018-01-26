import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { AuthenticationService } from '../services/authentication.service';
import { CookieService } from './cookie.service';
// tslint:disable:no-import-side-effect
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// tslint:enable:no-import-side-effect

const STATUS_UNAUTHORIZED = 401;
const STATUS_FORBIDDEN = 403;

@Injectable()
export class HttpService extends Http {

    private cookieService: CookieService;
   // private authenticationService: AuthenticationService;

    constructor(backend: XHRBackend, options: RequestOptions, cookies: CookieService) {
        super(backend, options);
        this.cookieService = cookies;
       // this.authenticationService = authentication;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

        const token = this.cookieService.get('accessToken');
        if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
            if (!options) {
                // let's make option object
                options = { headers: new Headers() };
            }
            options.headers.set('Authorization', `JWT ${token}`);
        } else {
            // we have to add the token to the url object
            url.headers.set('Authorization', `JWT ${token}`);
        }
        return super.request(url, options).catch(this.catchAuthError(this, url, options));
    }

    private catchAuthError(self: HttpService, url: string | Request, options?: RequestOptionsArgs) {
        // we have to pass HttpService's own instance here as `self`
        return (res: Response) => {
            if (res.status === STATUS_UNAUTHORIZED) {
                // try refresh
                // return Observable.fromPromise(self.authenticationService.refresh().toPromise()
                //     .then((response: Response) => {
                //         return this.request(url, this.options).toPromise();
                //     })
                //     .catch((error: any) => {
                //         self.authenticationService.logout();
                //         return Observable.throw(error).toPromise();
                //     })
                // );
            } else if (res.status === STATUS_FORBIDDEN) {
                return Observable.throw(res);
            } else {
                return Observable.throw(res);
            }
        };
    }
}
