import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConvertorPipe } from '../pipe/currency-convertor-pipe';

@Component({
  selector: 'app-use-custom-pipe',
  imports: [FormsModule,CurrencyConvertorPipe],
  templateUrl: './use-custom-pipe.html',
  styleUrl: './use-custom-pipe.css',
})
export class UseCustomPipe {
  amountInINR: number = 0;
  selectedCurrency: string = 'INR';
}
