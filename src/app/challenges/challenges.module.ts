import { NgModule } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { ChallengeEditComponent } from '../challenges-edit/challenges-edit.component';
import { TodayComponent } from './today/today.component';
import { CurrentChallengeComponent } from './current-challenge.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[NativeScriptCommonModule, ChallengesRoutingModule, SharedModule],
    declarations: [ChallengeTabsComponent, ChallengeEditComponent, TodayComponent, CurrentChallengeComponent],
    exports: [NativeScriptCommonModule, ChallengesRoutingModule ]
})

export class ChallengesModule {}
