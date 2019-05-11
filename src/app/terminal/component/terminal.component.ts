import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit, AfterViewInit {

  @Input() user: string = 'jefferson';
  @Output() terminalEvent: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup;

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit() {
    this.newLine();
  }

  ngAfterViewInit() {
  }

  public onEnter(): void {
    const messageSend = this.message;

    console.log(messageSend);

    if (!messageSend) { return this.newLine(); }
    if (messageSend === 'clear') { return this.clear(); }

    this.send(messageSend);
  }

  /**
   * Send a message for other users.
   */
  public send(messageSend: string): void {

    console.log(messageSend);
    this.terminalEvent.emit(messageSend);

    this.newLine();
  }

  private get message(): string {
    const { content } = this.formulario.controls;
    const contentValue = content.value.split('\n');
    const message = Object.assign([], contentValue).reverse()[0];

    const messageSanitized = message.split('$ ')[1];
    return messageSanitized;
  }

  /**
   * Print a new line with user
   */
  private newLine(): void {
    const message = `${this.user}$ `;

    setTimeout(() => this.print(message), 10);
  }

  /**
   * Clear terminal
   */
  private clear(): void {
    console.log('clear');
    setTimeout(() => {
      this.formulario.controls.content.setValue('');
      this.newLine();
    }, 10);
  }

  private print(message: string): void {
    const { content } = this.formulario.controls;

    if (!content.value) {
      content.setValue(message);

      return;
    }

    const newMessage = content.value + message;
    content.setValue(newMessage);
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      content: this.fb.control('', [Validators.required, Validators.minLength(1)]),
    });
  }
}
