import { Component, OnInit } from '@angular/core';
// import { Page, isAndroid } from 'tns-core-modules/ui/page';
// import { android } from 'tns-core-modules/application';


@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  ngOnInit(): void {
  }

  onActionSelect(action: 'complete' | 'fail' | 'cancel'){
      console.log(action);
  }

}
