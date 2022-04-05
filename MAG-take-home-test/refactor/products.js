const checkProductPrice = (
  productType,
  price,
  newProductPriceAddition,
  oldProductPriceAddition,
  isPublishedToday,
  productPublishedTodayRebate
) => {
  if (productType === 0 && isPublishedToday) {
    return price + newProductPriceAddition - productPublishedTodayRebate;
  } else {
    return price + oldProductPriceAddition;
  }
};
export { checkProductPrice };
export const productPublishedToday = (isPublishedToday, price) => {
  if (isPublishedToday) {
    return price - isPublishedToday;
  }
};
