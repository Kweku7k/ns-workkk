import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { ChallengeEditComponent } from '../challenges-edit/challenges-edit.component';
import { TodayComponent } from './today/today.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[NativeScriptCommonModule, ChallengesRoutingModule, SharedModule],
    declarations: [ChallengeTabsComponent, ChallengeEditComponent, TodayComponent],
    exports: [NativeScriptCommonModule, ChallengesRoutingModule ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class ChallengesModule {}
