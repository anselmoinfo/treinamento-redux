import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { ContentComponent } from './components/content/content.component';

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
