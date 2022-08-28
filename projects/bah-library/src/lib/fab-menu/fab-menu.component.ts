import { Component, Input, OnInit } from '@angular/core';
import { FabMenuItem } from './fab-menu-item.type';

@Component({
  selector: 'bah-fab-menu',
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.scss'],
})
export class FabMenuComponent implements OnInit {

  @Input() items: FabMenuItem[] = [];

  @Input() icon: string = 'add';

  constructor() { }

  ngOnInit(): void {
  }

}
