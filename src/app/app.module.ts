import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives'

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from './challenges/current-challenge.component';
import { ChallengeEditComponent } from './challenges-edit/challenges-edit.component';
import { TestComponent } from './test/test.component';
import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from './challenges/today/today.component';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ActionBarComponent } from "./shared/ui/action-bar/action-bar.component";
import { ChallengeTabsComponent } from "./challenges/challenge-tabs/challenge-tabs.component"
import { RouterModule } from "@angular/router";

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
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        ChallengeEditComponent,
        TestComponent,
        AuthComponent,
        TodayComponent,
        ActionBarComponent,
        ChallengeTabsComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
