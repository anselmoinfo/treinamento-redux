import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './containers/default/default.component';
import { MaterialModule } from 'src/app/material';
import { DefaultRoutingModule } from './default-routing.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, MaterialModule, DefaultRoutingModule],
})
export class HomeModule {}
