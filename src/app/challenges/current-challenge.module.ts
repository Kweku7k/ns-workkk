import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CurrentChallengeComponent } from "./current-challenge.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    declarations: [CurrentChallengeComponent],
    imports: [NativeScriptCommonModule, SharedModule, NativeScriptRouterModule.forChild([
       { path: '', component: CurrentChallengeComponent },
    //    NativeScriptRouterModule
    ])],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class CurrentChallengeModule {}
