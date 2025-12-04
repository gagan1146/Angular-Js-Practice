import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-overview',
  imports: [CommonModule],
  templateUrl: './pipes-overview.html',
  styleUrl: './pipes-overview.css',
})
export class PipesOverview {
  title = 'Pipes Overview';
  currentDate = new Date();
  sampleText = 'Angular Pipes Example';
  numberValue = 123456.789;
  jsonData = { name: 'Angular', version: '12.0.0', type: 'Framework' };
  arrayData = ['Angular', 'React', 'Vue', 'Svelte'];

  getFormattedDate(): string {
    return this.currentDate.toLocaleDateString();
  }
}