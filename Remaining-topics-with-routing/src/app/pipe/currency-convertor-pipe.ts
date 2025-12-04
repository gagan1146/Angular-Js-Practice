import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

  conversionRates: { [key: string]: number } = {
    'INR_TO_USD': 0.012,
    'INR_TO_EUR': 0.011,
    'INR_TO_GBP': 0.0095,
    'INR_TO_JPY': 1.79
  };

  transform(value: number, targetCurrency: string): number {
    if (!value || !targetCurrency) return value;

    let key = `INR_TO_${targetCurrency}`;
    let rate = this.conversionRates[key];

    return rate ? value * rate : value;
  }
}
