import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directivesProblem';

  showParagraph = false;
  log: number[] = [];

  onClick() {
    if (this.showParagraph) {
      this.showParagraph = false;
    } else {
      this.showParagraph = true;
    }
    this.log.push(Date.now());
  }
}
