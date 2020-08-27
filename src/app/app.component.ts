import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import { UIService } from "./shared/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
// import { RadSideDrawer }

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit{
@ViewChild(RadSideDrawerComponent,{static:true}) drawerComponent: RadSideDrawerComponent;
// @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;

    private drawerSub: Subscription;
    private drawer: RadSideDrawer;
    constructor( private uiService: UIService, private changeDetectionRef: ChangeDetectorRef){}

ngOnInit(){
    this.drawerSub = this.uiService.drawerState.subscribe(()=>{
    if (this.drawer){
        this.drawer.toggleDrawerState()
    }
});
}

ngAfterViewInit(){
    this.drawer = this.drawerComponent.sideDrawer;
    this.changeDetectionRef.detectChanges();
}

ngOnDestroy(){
    // this.uiService.drawerState.unsub
    if (this.drawerSub){
        this.drawerSub.unsubscribe();

    }
}

onLogout(){
    this.uiService.toogleDrawer();
}

}
