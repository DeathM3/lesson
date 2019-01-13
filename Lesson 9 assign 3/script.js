let money = +prompt("Your budget?", ''),
	time = prompt('Enter date YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Max consum this month", ''),
		b = prompt("How much it will cost?", '');
	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b !='' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
		} else {

		}
	}
	
appData.moneyPerDay = appData.budget / 30;

alert("Daily budget: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
	console.log("Minimum level");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Medium level");
} else if (appData.moneyPerDay > 2000){
	console.log("High level");
} else {
	console.log("Error");
}