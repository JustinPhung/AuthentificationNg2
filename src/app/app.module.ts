import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {routing, appRoutingProviders} from "./app.routing";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {Auth} from "./components/services/auth.service";

@NgModule( {
               imports: [BrowserModule, routing],
               declarations: [AppComponent, HomeComponent, ProfileComponent],
               bootstrap: [AppComponent],
               provider: [appRoutingProviders, AUTH_PROVIDERS, Auth]
           } )
export class AppModule {
}
