import {Component} from "@angular/core";
import {Auth} from "./components/services/auth.service";

@Component( {
                moduleId: module.id,
                selector: 'my-app',
                templateUrl: 'app.component.html',
                providers: [Auth]
            } )
export class AppComponent {
    constructor(  public auth: Auth ) {

    }
}
