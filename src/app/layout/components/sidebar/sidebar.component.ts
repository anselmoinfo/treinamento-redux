import { Component } from '@angular/core';
import * as fromAdmin from '../../../admin/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  descontoCalculado$ = this.store.pipe(
    select(fromAdmin.selectDescontoCalculado)
  );

  constructor(private store: Store<fromAdmin.State>) {}
}
