import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {
  HeaderComponent,
  SidebarComponent,
  ContentComponent,
} from './components';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, SidebarComponent, ContentComponent],
})
export class LayoutModule {}
