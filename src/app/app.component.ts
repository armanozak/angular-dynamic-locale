import { Component } from '@angular/core';
import { LocaleService } from './locale.service';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private localeService: LocaleService) {
    this.localeService.initLocale('en');
  }
}
