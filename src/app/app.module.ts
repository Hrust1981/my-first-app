import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardListComponent } from "./card-list/card-list.component";
import { CardItemComponent } from './card-item/card-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CardListComponent,
        CardItemComponent,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
