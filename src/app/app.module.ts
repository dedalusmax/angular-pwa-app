import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogOverviewExampleComponent } from './dialog-overview-example.component';
import { environment } from '../environments/environment';

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
  providers: [],
  entryComponents: [
    DialogOverviewExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
