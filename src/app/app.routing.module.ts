import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    // { path: '', redirectTo: '/challenges/(today:today//ChallengeEditComponent:currentChallenge)', pathMatch: 'full' },
    { path: "", component: AuthComponent},
    { path: "challenges",
    // loadChildren: "../app/challenges/challenges-routing.module#ChallengesRoutingModule",
    loadChildren: './challenges/challenges.module#ChallengesModule'
 }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
