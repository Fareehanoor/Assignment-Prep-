/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const totalTransactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656163200000,
    price: 15,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656249600000,
    price: 20,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656336000000,
    price: 5,
    category: "Stationery",
    itemName: "Pen",
  },
];
function calculateTotalSpentByCategory(transactions) {
  const totals = transactions.reduce((initial, transaction) => {
    const { price, category } = transaction;
    initial[category] = (initial[category] || 0) + price;
    return initial;
  }, {});
  return Object.entries(totals).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

const calculate = calculateTotalSpentByCategory(totalTransactions);
console.log(calculate);

module.exports = calculateTotalSpentByCategory;
