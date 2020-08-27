import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { NgModule } from "@angular/core";
import { TodayComponent } from "./challenges/today/today.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge.component";
import { ChallengeEditComponent } from "./challenges-edit/challenges-edit.component";
import { ChallengeTabsComponent } from "./challenges/challenge-tabs/challenge-tabs.component";

const routes: Routes = [
    // { path: '', redirectTo: '/challenges/(today:today//ChallengeEditComponent:currentChallenge)', pathMatch: 'full' },
    { path: "", component: AuthComponent},


    { path: "challenges", children: [
        { path: 'tabs', component: ChallengeTabsComponent, children:[
            { path: "today", component: TodayComponent, outlet: "today" },
            { path: "current-challenge", component: ChallengeEditComponent, outlet: "currentChallenge" }
        ] },
        { path: ":mode", component: CurrentChallengeComponent },
        { path: "", redirectTo: '/challenges/tabs', pathMatch: 'full' }
    ] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
