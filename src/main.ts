import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CustomerListComponent } from './app/components/customer-list/customer-list.component';
import {provideHttpClient} from '@angular/common/http';

bootstrapApplication(CustomerListComponent,{
  providers: [
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));
