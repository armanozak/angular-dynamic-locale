import { Component, Inject, LOCALE_ID, Optional } from '@angular/core';
import { LocaleService } from './locale.service';
import { LocaleId } from './locale.provider';

@Component({
  template: `
    <button (click)="onLangChange()">CHANGE LANGUAGE</button>
    
    <h2>{{ localeId }}</h2>

    <div>{{ now | date }}</div>
  `,
})
export class HomeComponent {
  now = Date.now();

  constructor(
    private localeService: LocaleService,
    @Inject(LOCALE_ID) public localeId: LocaleId,
  ) {}

  onLangChange() {
    const lang = this.localeService.currentLocale.startsWith('en') ? 'fr' : 'en';
    this.localeService.setLocale(lang);
  }
}
