import { CurrencyCode } from '../types';
import { CURRENCY_MAP } from '../data/dresses';

export function formatPrice(amountInUSD: number, currency: CurrencyCode = 'USD'): string {
  const config = CURRENCY_MAP[currency] || CURRENCY_MAP.USD;
  const converted = amountInUSD * config.rate;
  return `${config.symbol}${Math.round(converted).toLocaleString()}`;
}

export function calculateEstimatedDeliveryDate(daysFromNow: number = 3): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}
