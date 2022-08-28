import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FabMenuItem } from './fab-menu-item.type';

@Component({
  selector: 'bah-fab-menu',
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.scss'],
})
export class FabMenuComponent implements OnInit {

  @Input() items: FabMenuItem[] = [];
  @Input() icon: string = 'add';
  @Input() label: string = 'Floating menu';
  @Input() position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' = 'bottom-right';

  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() click = new EventEmitter<FabMenuItem>();

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    if(this.isOpen) {
      this.closeMenu();
      return;
    }

    this.openMenu();
  }

  itemClickHandler(item: FabMenuItem) {
    this.click.emit(item);
    this.closeMenu();
  }

  private openMenu() {
    this.isOpen = true;
    this.open.emit();
  }

  private closeMenu() {
    this.isOpen = false;
    this.close.emit();
  }
}
