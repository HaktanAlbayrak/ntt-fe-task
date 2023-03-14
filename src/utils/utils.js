export const priceFormat = (price) => {
  const currency_symbol = '₺';
  const formatedPrice = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  }).format(price);
  return formatedPrice.replace(currency_symbol, '').concat(' TL');
};
