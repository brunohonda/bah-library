import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FabMenuComponent } from './fab-menu.component';



@NgModule({
  declarations: [
    FabMenuComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    FabMenuComponent,
  ]
})
export class FabMenuModule { }
