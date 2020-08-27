import { Component, OnInit, Input } from '@angular/core';
import { Page, isAndroid } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { UIService } from '../../ui.service';
// import { android } from 'tns-core-modules/application';

declare var android: any;

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

@Input() title: string;
@Input() showBackButton = "false";
@Input() hasMenu = "true"

  constructor(
      private page: Page,
      private router:RouterExtensions,
      private uiService: UIService

    ) { }

  ngOnInit(): void {
  }

  get anAndroidDevice(){
      return isAndroid;
  }

  get canGoBack(){
      return this.router.canGoBackToPreviousPage() && this.showBackButton;
  }
  onGoBack(){
    this.router.backToPreviousPage();
  }

  onLoadedActionBar(){
    if (isAndroid){
        const androidToolBar = this.page.actionBar.nativeView;
        const backButton = androidToolBar.getNavigationIcon();

        if(backButton){
            console.log("Its Android Boss🌝")
            backButton.setColorFilter(android.graphics.Color.parseColor('#171717'), (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
        }
        }
      }

      onToogleMenu(){
          this.uiService.toogleDrawer();
      }
}
