import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./features/auth/login/login.component";
import { SignUpComponent } from "./features/auth/sign-up/sign-up.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { HomeComponent } from "./features/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsdKshPipe } from './shared/pipes/usd-ksh.pipe';
import { DescShortenerPipe } from './shared/pipes/desc-shortener.pipe';

@NgModule({
    declarations: [
        AppComponent,
        UsdKshPipe,
        DescShortenerPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginComponent,
        SignUpComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
