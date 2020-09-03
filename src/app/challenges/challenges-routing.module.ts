import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { TodayComponent } from "./today/today.component";
import { ChallengeEditComponent } from "../challenges-edit/challenges-edit.component";
import { CurrentChallengeComponent } from "./current-challenge.component";

const routes: Routes = [
    { path: 'tabs', component: ChallengeTabsComponent, children:[
        { path: "today", component: TodayComponent, outlet: "today" },
        { path: "current-challenge", component: ChallengeEditComponent, outlet: "currentChallenge" }
    ] },
    { path: ":mode", component: CurrentChallengeComponent, loadChildren:
    '~/app/challenges/current-challenge.#ChallengeEditModule'},
    { path: "", redirectTo: '/challenges/tabs', pathMatch: 'full' }
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChallengesRoutingModule{}
