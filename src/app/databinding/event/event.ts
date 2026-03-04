import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  isButtonDisabled: boolean = true;
  buttonLabel: string = 'Disabled';
  clickCount: number = 0;
  lastKeyPressed: string = '';
  selectedColor: string = '#3b82f6';
  mousePosition: { x: number; y: number } = { x: 0, y: 0 };
  isHovered: boolean = false;
  typedInput: string = '';
  inputValue: string = '';
  formMessage: string = '';
  eventLog: string[] = [];

  frameworks = [
    { name: 'angular', value: 'Angular' },
    { name: 'react',   value: 'React'   },
    { name: 'vue',     value: 'Vue'     }
  ];
  selectedFramework: string = 'angular';

  onButtonClick(): void {
    this.clickCount++;
    this.isButtonDisabled = false;
    this.buttonLabel = 'Enabled';
  }

  onKeyPress(event: KeyboardEvent): void {
    this.lastKeyPressed = event.key;
  }

  onMouseMove(event: MouseEvent): void {
    this.mousePosition = { x: event.clientX, y: event.clientY };
  }

  onInputChange(event: globalThis.Event): void {
    this.typedInput = (event.target as HTMLInputElement).value;
  }

  onMouseEnter(): void { this.isHovered = true; }
  onMouseLeave(): void { this.isHovered = false; }

  onSelectionChange(value: string): void {
    this.selectedFramework = value;
  }

  onColorChange(event: globalThis.Event): void {
    this.selectedColor = (event.target as HTMLInputElement).value;
    this.logEvent(`Color changed to: ${this.selectedColor}`);
  }

  onFormSubmit(event: globalThis.Event): void {
    event.preventDefault();
    this.formMessage = `Form submitted! Input was: "${this.inputValue}"`;
    this.inputValue = '';
    this.logEvent('Form submitted');
  }

  onDoubleClick(): void {
    this.logEvent('Double-click detected!');
    alert('You double-clicked!');
  }

  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    this.logEvent(`Right-click at (${event.clientX}, ${event.clientY})`);
  }

  private logEvent(msg: string): void {
    this.eventLog.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`);
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}