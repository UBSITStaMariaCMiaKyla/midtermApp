import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  name = 'Mia';
  course = 'BSIT';
  year = 2;
}