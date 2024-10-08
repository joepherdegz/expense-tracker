import { getColors } from './getColors';
import { getCurrentMoth } from './getCurrentMonth';

export function countCategories(data, total) {
  if (!data.length) return [];

  const categorySum = {};
  const { firstDayOfMonth, lastDayOfMonth } = getCurrentMoth();

  const currentMonthTransactions = data.filter(
    item => item.date >= firstDayOfMonth && item.date <= lastDayOfMonth
  );

  if (!currentMonthTransactions.length) return [];

  currentMonthTransactions.forEach(transaction => {
    const { category, sum } = transaction;
    if (categorySum[category.categoryName]) {
      categorySum[category.categoryName] += sum;
    } else {
      categorySum[category.categoryName] = sum;
    }
  });

  const categoriesData = [];

  Object.entries(categorySum).forEach(([key, value]) => {
    let percent = Number(((value / total) * 100).toFixed(1));
    categoriesData.push({ name: key, value: percent });
  });

  const sumPercentages = categoriesData.reduce(
    (total, item) => total + item.value,
    0
  );

  const sortedCategories = categoriesData.sort((a, b) => b.value - a.value);

  if (sumPercentages !== 100) {
    const diff = 100 - sumPercentages;

    if (sortedCategories[sortedCategories.length - 1].value > 1) {
      sortedCategories[sortedCategories.length - 1].value = Number(
        (sortedCategories[sortedCategories.length - 1].value + diff).toFixed(1)
      );
    } else {
      sortedCategories[sortedCategories.length - 1].value = 0.1;
    }
  }

  return getColors(sortedCategories);
}