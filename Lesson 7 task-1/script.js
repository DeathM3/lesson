let money = prompt("Your budget?", ''),
	time = prompt('Enter date YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Max consum this month", ''),
	a2 = prompt("How much it will cost?", ''),
	a3 = prompt("Max consum this month", ''),
	a4 = prompt("How much it will cost?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);