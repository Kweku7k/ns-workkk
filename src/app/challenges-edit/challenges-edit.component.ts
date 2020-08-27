import { Component, Input } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'

@Component({
    selector: 'ns-challenge-edit',
    templateUrl: './challenges-edit.component.html',
    styleUrls: ['./challenges-edit.component.scss'],
    moduleId: module.id
})

export class ChallengeEditComponent{
    constructor( private router: RouterExtensions) {}

    onEdit(){
        this.router.navigate(['/challenges/edit'],
        {transition: {name: 'slideLeft' }})
    }


}
