import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogOverviewExampleComponent } from './dialog-overview-example.component';

import { environment } from '../environments/environment';

import { MaterialModule } from './material.module';

import { CookieService } from './shared/services/cookie.service';
import { HttpService } from './shared/services/http.service';
import { WebApiService } from './shared/services/web-api.service';

import { UserService } from './shared/services/user.service';
import { RoleService } from './shared/services/role.service';
import { CurrencyService } from './shared/services/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    CookieService,
    {
      provide: HttpService,
      // useFactory: (backend: any, options: any, cookies: CookieService, authentication: AuthenticationService) => {
      //     return new HttpService(backend, options, cookies, authentication);
      // },
      useFactory: (backend: any, options: any, cookies: CookieService) => {
        return new HttpService(backend, options, cookies);
    },
      deps: [XHRBackend, RequestOptions, CookieService]
  },
    WebApiService,
    UserService,
    RoleService,
    CurrencyService
  ],
  entryComponents: [
    DialogOverviewExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
