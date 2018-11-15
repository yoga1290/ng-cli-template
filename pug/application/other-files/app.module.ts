import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
<% if (routing) { %>
import { AppRoutingModule } from './app-routing.module';<% } %>
<% if (serviceWorker) { %>
import { ServiceWorkerModule } from '@angular/service-worker';<% } %>
import { AppComponent } from './app.component';
<% if (serviceWorker) { %>
import { environment } from '../environments/environment';<% } %>

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule<% if (routing) { %>,
    AppRoutingModule<% } %><% if (serviceWorker) { %>,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })<% } %>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
