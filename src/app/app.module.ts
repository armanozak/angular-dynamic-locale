import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { TranslateModule } from '@ngx-translate/core';
import { LocaleProvider } from './locale.provider';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home.module').then(m => m.HomeModule),
      },
    ]),
    TranslateModule.forRoot(),
  ],
  providers: [ LocaleProvider ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
