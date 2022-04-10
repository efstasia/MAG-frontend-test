// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product

const isPublishedToday = publishedDate => {
  if (publishedDate.toDateString() == new Date().toDateString()) {
    return 10;
  }
};

const checkUserTypeDiscount = userType => {
  if (userType === 1) {
    return 5;
  } else {
    return 0;
  }
};

const productTypePriceAddition = productType => {
  if (productType === 0) {
    return 25;
  } else if (productType === 1) {
    return 35;
  } else {
    throw new Error({
      message: `Unrecognized product type:  + ${productType}`,
    });
  }
};

const calculatePrice = (userType, productType, price, publishedDate) => {
  const userTypeSum = checkUserTypeDiscount(userType);
  const productTypeSum = productTypePriceAddition(productType);
  const publishedTodaySum = isPublishedToday(publishedDate);

  const finalPrice = price + productTypeSum - userTypeSum - publishedTodaySum;
  return finalPrice;
};

// var calculatePrice = function (userType, productType, price, publishedDate) {
//   try {
//     switch (userType) {
//       case 0: // normal
//         if (productType == 0) {
//           // new product
//           var enddateDiscount = 0;
//           if (publishedDate.toDateString() == new Date().toDateString())
//             enddateDiscount = 10;

//           return price + 25 - enddateDiscount;
//         } else if (productType == 1) {
//           // old product
//           return price + 35 - 0;
//         }
//         break;
//       case 1: // company
//         if (productType == 0) {
//           // new product
//           if (publishedDate.toDateString() === new Date().toDateString()) {
//             return price + 25 - 15; // Enddate discount and company discount
//           }

//           return price + 25 - 5; // Only company discount
//         } else if (productType == 1) {
//           // old product
//           return price + 35 - 5;
//         }
//         break;
//     }
//   } catch (ex) {
//     console.log(ex);
//   }
//   return 0;
// };
