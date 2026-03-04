import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.html',
  styleUrl: './property.css',
})
export class Property {
  isButtonDisabled: boolean = true;
  imageSource: string = 'Asset 2SITLOGO1.png';
  imageAlt: string = 'SIT Logo';
  imageWidth: number = 80;
  linkUrl: string = 'https://www.ubaguio.edu/';
  inputPlaceholder: string = 'Type your name here...';
  clickCount: number = 0;
  inputName: string = '';

  onButtonClick(): void {
    this.clickCount++;
    this.isButtonDisabled = false;
  }
}