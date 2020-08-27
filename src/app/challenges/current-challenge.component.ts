import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions, PageRoute } from 'nativescript-angular/router';

@Component({
    selector: 'ns-current-challenge',
    moduleId: module.id,
    templateUrl: './current-challenge.component.html',
    styleUrls:['./current-challenge.component.scss']
})

export class CurrentChallengeComponent implements OnInit{
isCreating = true


    constructor( private activatedRoute: ActivatedRoute, private router: RouterExtensions, private pageRoute: PageRoute) {


    }
    ngOnInit(){
        // this.activatedRoute.paramMap.subscribe(paramMap => {
        //     console.log(paramMap.get('mode'));
        // });
        this.pageRoute.activatedRoute.subscribe(activatedRoute =>{
            activatedRoute.paramMap.subscribe(paramMap => {
                    if (!paramMap.has('mode')){
                        this.isCreating=true;
                    } else {
                        this.isCreating = paramMap.get('mode') !== 'edit';
                    }
                })
        })


    }


}
