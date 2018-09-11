import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showPdf = false;

  onHide(val: boolean):void {
    this.showPdf = val;
  }
}
