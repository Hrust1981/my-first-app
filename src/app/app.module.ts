import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './card/card.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CardModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    exports: [
        BrowserModule,
        FormsModule,
    ]
})
export class AppModule { }
