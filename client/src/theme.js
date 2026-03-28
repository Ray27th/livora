export const currencyFormatter = new Intl.NumberFormat("en-SG", {
  style: "currency",
  currency: "SGD",
  maximumFractionDigits: 0,
});

export const formatPrice = (amount) => currencyFormatter.format(amount);

export const dropStatusLabels = {
  live: "Live now",
  upcoming: "Upcoming",
  ended: "Archive",
};

export const stockStatusLabels = {
  in_stock: "Ready to ship",
  low_stock: "Almost gone",
  sold_out: "Sold out",
};
