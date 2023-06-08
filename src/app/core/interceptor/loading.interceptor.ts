import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private countRequest = 0;
  private spinner: boolean = false;
  constructor(
    private spinnerService: SpinnerService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.countRequest) {
      this.spinnerService.togglerSpinner(true);
    }
    this.countRequest++;
    return next.handle(request)
      .pipe(
        finalize(() => {
          this.spinnerService.togglerSpinner(false);
        })
      );
  }
}
