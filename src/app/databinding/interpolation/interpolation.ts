import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

interface User {
  name: string;
  position: string;
  department: string;
  details: { role: string };
}

interface Country {
  id: string;
  name: string;
}

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  title: string       = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string  = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles               = ['Admin', 'Editor', 'Viewer'];
  text: string        = '{{expression}}';
  curly: string       = '{{ }}';
  common: string      = '{{ userName }}';
  methods: string     = '{{ getStatus() }}';
  dotnot: string      = '{{ user.name }}';
  dotnot2: string     = '{{ user?.profile?.email }}';
  jpipe: string       = '{{ user | json }}';
  isActive: boolean   = false;

  // from previous component
  name: string        = 'Mia';
  course: string      = 'BSIT';
  year: number        = 2;

  // object type
  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    details: { role: 'Admin' }
  };

  countries: Country[] = [
    { id: 'PH', name: 'Philippines' },
    { id: 'US', name: 'United States' },
    { id: 'JP', name: 'Japan' }
  ];

  selectedCountryId = 'PH';

  getStatus(): string {
    return this.isActive ? 'Active' : 'Inactive';
  }

  getSelectedCountry(): string {
    return this.countries.find(c => c.id === this.selectedCountryId)?.name || '';
  }
}