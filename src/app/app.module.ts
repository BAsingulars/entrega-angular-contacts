import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [AppComponent, ContactListComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
