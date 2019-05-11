import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './component/terminal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TerminalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [TerminalComponent],
  entryComponents: [TerminalComponent]
})
export class TerminalModule { }
