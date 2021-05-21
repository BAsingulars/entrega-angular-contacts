import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritesComponent } from './favorites/favorites.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LettersComponent } from './letters/letters.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    FavoritesComponent,
    LettersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    NgbModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
