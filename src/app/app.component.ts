import { Component } from '@angular/core';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pec5';
  spinner: boolean = false;
  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.showSpinner.subscribe((res: boolean) => {
      this.spinner = res;
    });
  }
}
