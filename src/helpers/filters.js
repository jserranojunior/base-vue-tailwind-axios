export const money = (value) => {
  if (!value) {
    return "0,00";
  } else {
    let val = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};
