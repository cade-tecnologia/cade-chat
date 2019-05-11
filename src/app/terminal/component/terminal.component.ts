import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, AfterViewInit {

  @Input() user: string = 'jefferson';

  public formulario: FormGroup;

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit() {
    this.newLine();
  }

  ngAfterViewInit() {
  }

  /**
   * Send a message for other users.
   */
  public send(): void {

  }

  /**
   * Print a new line with user
   */
  private newLine(): void {
    const message = `${this.user}$ `;

    this.print(message);
  }

  private print(message: string): void {
    this.formulario.controls.content.setValue(message);
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      content: this.fb.control(null, [Validators.required, Validators.minLength(1)]),
    });
  }
}
