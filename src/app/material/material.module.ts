import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';

const matModules = [
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatBadgeModule,
  MatGridListModule,
];

@NgModule({
  declarations: [],
  imports: [matModules],
  exports: [matModules],
})
export class MaterialModule {}
