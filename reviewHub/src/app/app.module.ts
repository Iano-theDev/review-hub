import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./features/auth/login/login.component";
import { SignUpComponent } from "./features/auth/sign-up/sign-up.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginComponent,
        SignUpComponent,
        FooterComponent
    ]
})
export class AppModule { }
