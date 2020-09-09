import { Component, Input, ViewContainerRef, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/common";
import { DayModalComponent } from "../challenges/day-modal/day-modal.component";
import { UIService } from "../shared/ui.service";

@Component({
    selector: "ns-challenge-edit",
    templateUrl: "./challenges-edit.component.html",
    styleUrls: [
        "./challenges-edit.component.common.scss"
        // "./challenges-edit.component.scss",
    ],
    moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit{

    weekDays = ['S','M','T','W','T','F','S'];
    days: { DayInMonth: number, dayInWeek: number }[]=[];
    currentMonth: number;
    currentYear: number;


    constructor(
        private modalDialog: ModalDialogService,
        private vcRef: ViewContainerRef,
        private uiService: UIService
    ) {}

    onChangeStatus() {
        this.modalDialog
            .showModal(DayModalComponent, {
                fullscreen: true,
                viewContainerRef: this.uiService.getRootVccRef()
                    ? this.uiService.getRootVccRef()
                    : this.vcRef,
                context: { date: new Date() },
            })
            .then((action: string) => {
                console.log(action);
            });
    }

    getRow(index: number, day:{ DayInMonth: number, dayInWeek: number }){
        const startRow = 1;
        const weekRow = Math.floor(index / 7);
        const firstWeekDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
        // What do you call these type of statements
        const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    }

    ngOnInit(){
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth();
        const dayInMonth =  new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

        for (let i = 1; i < dayInMonth + 1; i++){
            const date = new Date(this.currentYear, this.currentMonth, i)
                const dayInWeek = date.getDay();
                this.days.push({ DayInMonth:i, dayInWeek: dayInWeek})
            }
        }
    }

