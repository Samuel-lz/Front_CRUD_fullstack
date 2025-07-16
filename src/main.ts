import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CustomerListComponent } from './app/components/customer-list/customer-list.component';
import {provideHttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerAddComponent } from './app/components/customer-add/customer-add.component';

bootstrapApplication(CustomerAddComponent,{
  providers: [
    provideHttpClient(),
    FormsModule
  ]
})
  .catch((err) => console.error(err));
