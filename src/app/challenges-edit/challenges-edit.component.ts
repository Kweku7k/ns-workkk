import { Component, Input, ViewContainerRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/common";
import { DayModalComponent } from "../challenges/day-modal/day-modal.component";
import { UIService } from "../shared/ui.service";

@Component({
    selector: "ns-challenge-edit",
    templateUrl: "./challenges-edit.component.html",
    styleUrls: ["./challenges-edit.component.scss"],
    moduleId: module.id,
})
export class ChallengeEditComponent {
    constructor(
        private modalDialog: ModalDialogService,
        private vcRef: ViewContainerRef,
        private uiService: UIService
    ) {}

    // onEdit(){
    //     this.router.navigate(['/challenges/edit'],
    //     {transition: {name: 'slideLeft' }})
    // }

    onChangeStatus() {
        this.modalDialog.showModal(DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.uiService.getRootVccRef()
                ? this.uiService.getRootVccRef()
                : this.vcRef,
                context: {date: new Date() }
        })
        .then((action:string)=>{
            console.log(action);
        });
    }
}
