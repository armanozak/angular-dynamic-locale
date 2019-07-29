import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { LocaleService } from './locale.service';

import { HomeComponent } from './home.component';

@NgModule({
  imports:      [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    ]),
    TranslateModule.forChild(),
  ],
  exports:      [ RouterModule ],
  declarations: [ HomeComponent ],
  // Uncomment to see a multiple instance error
  // providers:    [ LocaleService ],
})
export class HomeModule {}
