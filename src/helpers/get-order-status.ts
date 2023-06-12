export const GetOrderStatus = (e: string) => {
  switch (e) {
    case "Pending":
      return " در انتظار تایید ";
    case "Processing":
      return "درحال انجام ";
    case "Packing":
      return " درحال بسته بندی  ";
    case "CancelledByCustomer":
      return "لغو توسط مشتری ";
    case "CancelledDueToUnavailability":
      return "اتمام موجودی 1 یا چند کالا";
    case "CancelledByAdmin":
      return "لغو توسط ادمین";
    case "Shipped":
      return "تحویل داده شده ";
    default:
      return " در انتظار تایید ";
  }
};
