import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives'

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";

import { TestComponent } from './test/test.component';
import { AuthComponent } from './auth/auth.component';

import { NativeScriptRouterModule } from "nativescript-angular/router";


import { RouterModule } from "@angular/router";
import { DayModalComponent } from "./challenges/day-modal/day-modal.component";
import { SharedModule } from "./shared/shared.module";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [

        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        RouterModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        SharedModule

    ],
    declarations: [
        AppComponent,
        TestComponent,
        AuthComponent,
        DayModalComponent,

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        DayModalComponent
    ]
})
export class AppModule { }
